# NewNikeRepo

# Faire un git clone du projet
git clone git@github.com:Whoistomiki/NewNikeRepo.git

# Installer la base de données PostgreSQL via le terminal
psql -U postgres 
Se connecter à psql

# Créer un user avec un password nike 
CREATE USER nike WITH PASSWORD 'nike';

# Créer une base de donnée avec nike en owner
CREATE DATABASE nike OWNER nike;

# Mettre les privilèges sur l'user nike
GRANT ALL PRIVILEGES ON DATABASE nike TO nike;

# Launch la base de données 
Aller sur le dossier backend cd backend/
Faire un node migrate.js

# Changer le fichier .env.exemple en .env
Mettre 
PORT=3001
DB_URL=postgresql://nike:nike@localhost:5432/nike
SECRET_KEY=secret

# Lancer Docker
Faire un docker-compose up