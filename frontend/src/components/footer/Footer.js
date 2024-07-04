import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="footer-title">Ressources</h3>
            <ul>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Tutoriels</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Aides</h3>
            <ul>
              <li><a href="#">Centre d'aide</a></li>
              <li><a href="#">Contactez-nous</a></li>
              <li><a href="#">Politique de retour</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Entreprise</h3>
            <ul>
              <li><a href="#">À propos de nous</a></li>
              <li><a href="#">Équipe</a></li>
              <li><a href="#">Carrières</a></li>
              <li><a href="#">Actualités</a></li>
            </ul>
          </div>
          <div className="flex justify-end">
            <a href="#" className="social-icon">
              <img src="/assets/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" className="social-icon">
              <img src="/assets/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src="/assets/youtube-icon.png" alt="YouTube" />
            </a>
            <a href="#" className="social-icon">
              <img src="/assets/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-bottom flex justify-between items-center mt-8">
          <p><img src='/assets/location.png' alt="France" /> France © 2023 Nike, Inc. Tous droits réservés</p>
          <p>Guides | Conditions Générales de ventes | Terms of Use | Nike Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

