import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { first_name, last_name, company, subject, message, email } = req.body;

    // Validation des données
    if (!email || !first_name || !last_name || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const templateParams = {
      first_name,
      last_name,
      company: company || 'Non spécifiée',
      subject: subject || 'Pas de sujet',
      message,
      email,
    };

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.EMAILJS_USER_ID
    );

    if (response.status === 200) {
      return res.status(200).json({ message: 'Message envoyé avec succès' });
    } else {
      return res.status(500).json({ message: 'Erreur lors de l\'envoi du message' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Erreur serveur', 
      error: error.message || error.toString() 
    });
  }
}