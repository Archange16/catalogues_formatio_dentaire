'use client';
import React, { useState } from 'react';

const FormArea = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company: '',
    subject: '',
    message: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Envoi en cours...');
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage('Message envoyé avec succès !');

        if (typeof window !== "undefined" && window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Formulaire de Contact',
            content_category: 'Contact',
            email: formData.email,
            value: 0.0,
            currency: 'EUR',
          });
        }

        setFormData({
          first_name: '',
          last_name: '',
          company: '',
          subject: '',
          message: '',
          email: '',
        });
      } else {
        setStatusMessage(data.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      setStatusMessage(`Erreur : ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="first_name"
              placeholder="Prénom"
              required
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="last_name"
              placeholder="Nom"
              required
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 mb-3">
            <input
              type="text"
              name="company"
              placeholder="Société (si applicable)"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 mb-3">
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 mb-3">
            <input
              type="text"
              name="subject"
              placeholder="Objet du message"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 mb-3">
            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-md-12 mb-4">
            <button type="submit" className="btn-one" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </div>
        </div>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </>
  );
};

export default FormArea;
