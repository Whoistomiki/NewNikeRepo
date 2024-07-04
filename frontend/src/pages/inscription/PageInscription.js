import React, { useState } from 'react';
import './PageInscription.css';
import { Link } from 'react-router-dom';

const PageInscription = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User registered successfully:', data);
        // Redirection ou autre action après succès
        window.location.href = '/'; // Rediriger vers l'accueil
      } else {
        console.error('Error registering user:', data);
        // Afficher l'erreur à l'utilisateur
      }
    } catch (error) {
      console.error('Network error:', error);
      // Afficher une erreur réseau à l'utilisateur
    }
  };

  return (
    <div className="inscription-page">
      <div className="container mx-auto">
        <div className="inscription-form p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <img src="/assets/Nike-logo-basique.png" alt="Logo Nike" className="mx-auto h-20 logo" />
            <p className="text-sm mt-2">REJOINS-NOUS SUR NIKE</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-between">
              <div className="w-1/2 pr-2">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Prénom"
                  className="form-input"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 pl-2">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Nom"
                  className="form-input"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Adresse e-mail"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Confirmer le mot de passe"
                className="form-input"
                value={formData.passwordConfirm}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="w-full bg-white text-black py-2 px-4">S'inscrire</button>
          </form>

          <p className="mt-4 text-center text-sm">Déjà membre? <Link to="/identifier" className="font-medium"><u>Connecte-toi</u></Link></p>
        </div>
      </div>
    </div>
  );
};

export default PageInscription;
