import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { first_name, last_name, company, subject, message, email } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,        // smtp.ionos.fr
    port: parseInt(process.env.EMAIL_PORT || "465"), // 465 pour SSL
    secure: true,                         // true = SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${first_name} ${last_name}" <${process.env.EMAIL_USER}>`, // doit correspondre à un email autorisé chez IONOS
    replyTo: email, // pour que le destinataire puisse répondre au bon expéditeur
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: subject || 'Nouveau message du site',
    html: `
      <h2>Nouveau message reçu</h2>
      <p><strong>Nom :</strong> ${first_name} ${last_name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Société :</strong> ${company || 'Non précisé'}</p>
      <p><strong>Objet :</strong> ${subject}</p>
      <p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message envoyé avec succès.' });
  } catch (error) {
  console.error('Erreur SMTP détaillée :', error.response || error.message, error);
  return res.status(500).json({ message: "Erreur lors de l'envoi", error: error.message });
}
}
