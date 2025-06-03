import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { first_name, last_name, company, subject, message, email } = req.body;

  if (!email || !first_name || !last_name || !message) {
    return res.status(400).json({ message: 'Champs obligatoires manquants.' });
  }
console.log('BREVO_API_KEY:', process.env.SENDINBLUE_API_KEY);

  try {
    // Configuration des headers Brevo (version corrigée)
    const brevoHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.SENDINBLUE_API_KEY
    };

    // 1. Création/Mise à jour du contact
    const contactResponse = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        attributes: {
          FIRSTNAME: first_name,
          LASTNAME: last_name,
          COMPANY: company || '',
          SUBJECT: subject || '',
          MESSAGE: message || ''
        },
        listIds: [parseInt(process.env.BREVO_LIST_ID)],
        updateEnabled: true
      },
      { headers: brevoHeaders }
    );

    // 2. Envoi de l'email de confirmation
    const emailResponse = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: process.env.SENDER_NAME,
          email: process.env.SENDER_EMAIL
        },
        to: [{ email, name: `${first_name} ${last_name}` }],
        subject: "Confirmation de réception de votre message",
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <p>Bonjour ${first_name},</p>
            <p>Merci d’avoir contacté <strong>Kelaj Formation</strong> ! 😊<br>
              Nous sommes ravis de l’intérêt que vous portez à nos programmes de formation.</p>

              <p>Votre message a bien été reçu. Notre équipe reviendra vers vous avec une réponse personnalisée dans un délai de 48 heures ouvrées, directement dans votre boîte mail. 📩</p>

              <p>En attendant, n’hésitez pas à consulter notre site ou à nous suivre sur nos réseaux sociaux pour rester informé(e) de nos actualités et nouveautés.</p>

              <p>À très bientôt,</p>

              <p><strong>L’équipe Kelaj Formation</strong> ✨</p>
        `
      },
      { headers: brevoHeaders }
    );

    return res.status(200).json({ 
      message: 'Contact enregistré et email envoyé avec succès.',
      contactId: contactResponse.data?.id,
      emailId: emailResponse.data?.messageId
    });

  } catch (error) {
    console.error('Erreur détaillée Brevo:', {
      message: error.message,
      response: error.response?.data,
      stack: error.stack
    });

    return res.status(500).json({
      message: 'Erreur lors de la communication avec Brevo',
      error: error.response?.data || error.message
    });
  }
}