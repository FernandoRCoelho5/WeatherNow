# WeatherNow 🌤️

Mini portal de previsão do tempo desenvolvido em Next.js (App Router) utilizando apenas JavaScript, consumindo a API em tempo real do OpenWeatherMap.

## 📋 Pré-requisitos
- Node.js instalado.
- Uma chave de API (API Key) do [OpenWeatherMap](https://openweathermap.org/api).

## 🔑 Configurando a API Key
Antes de rodar o projeto, crie um arquivo chamado `.env.local` na raiz da pasta principal e adicione a sua chave no seguinte formato:
\`\`\`env
NEXT_PUBLIC_WEATHER_KEY=cole_sua_chave_aqui_sem_aspas
\`\`\`

## 🛠️ Como executar localmente
1. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.
