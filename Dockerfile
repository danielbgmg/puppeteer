# Base de imagem
FROM node:16

# Instalar dependências do Puppeteer
RUN apt-get update && apt-get install -y \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgbm1 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    wget \
    --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de dependências do projeto
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar os arquivos da aplicação
COPY . .

# Expor a porta na qual o aplicativo será executado
EXPOSE 3000

# Iniciar a aplicação
CMD ["npm", "start"]