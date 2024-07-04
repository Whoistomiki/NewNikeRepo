import React from 'react';
import './PageIdentification.css';
import { Link } from 'react-router-dom';

const PageIdentification = () => {
  return (
    <div className="login-page">
      <div className="container mx-auto">
        <div className="login-form p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <img src="/assets/Nike-logo-basique.png" alt="Logo Nike" className="mx-auto h-20 logo" />
            <p className="text-sm mt-2">TON COMPTE<br />POUR NIKE</p>
          </div>

          <form>
            <div className="mb-4">
              <input type="email" id="email" name="email" placeholder="Adresse e-mail" className="form-input" />
            </div>

            <div className="mb-4">
              <input type="password" id="password" name="password" placeholder="Mot de passe" className="form-input" />
              <div className="text-right">
                <a href="#" className="text-sm">Mot de passe oublié?</a>
              </div>
            </div>

            <button type="submit" className="w-full bg-white text-black py-2 px-4">Se connecter</button>
          </form>

          <p className="mt-4 text-center text-sm">Pas encore membre? <Link to="/signup" className="font-medium"><u>Rejoins-nous</u></Link></p>
        </div>
      </div>
    </div>
  );
};

export default PageIdentification;
