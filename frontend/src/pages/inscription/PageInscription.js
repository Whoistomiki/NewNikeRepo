import React from 'react';
import './PageInscription.css';
import { Link } from 'react-router-dom';

const PageInscription = () => {
  return (
    <div className="inscription-page">
      <div className="container mx-auto">
        <div className="inscription-form p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <img src="/assets/Nike-logo-basique.png" alt="Logo Nike" className="mx-auto h-20 logo" />
            <p className="text-sm mt-2">REJOINS-NOUS SUR NIKE</p>
          </div>

          <form>
            <div className="mb-4 flex justify-between">
              <div className="w-1/2 pr-2">
                <input type="text" id="firstName" name="firstName" placeholder="Prénom" className="form-input" />
              </div>
              <div className="w-1/2 pl-2">
                <input type="text" id="lastName" name="lastName" placeholder="Nom" className="form-input" />
              </div>
            </div>

            <div className="mb-4">
              <input type="email" id="email" name="email" placeholder="Adresse e-mail" className="form-input" />
            </div>

            <div className="mb-4">
              <input type="password" id="password" name="password" placeholder="Mot de passe" className="form-input" />
            </div>

            <div className="mb-4">
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmer le mot de passe" className="form-input" />
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
