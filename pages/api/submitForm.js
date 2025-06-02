import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { first_name, last_name, company, subject, message, email } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${first_name} ${last_name}" <${email}>`,
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
    console.error('Erreur SMTP :', error);
    return res.status(500).json({ message: "Erreur lors de l'envoi", error: error.message });
  }
}
