# Use a imagem oficial do Node.js
FROM node:18

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta que seu aplicativo Node.js está ouvindo
EXPOSE 3000

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "start"]