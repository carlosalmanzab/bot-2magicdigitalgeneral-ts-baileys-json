
module.exports = {
    apps: [
      {
        name: 'bot_magicd_unlock_1',
        script: 'dist/app.js', // Ruta al archivo compilado de TypeScript
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env_file: '.env',
        env: {
          MYSQL_DB_HOST: "localhost",
          MYSQL_DB_USER: "bot",
          MYSQL_DB_NAME: "bot_magic-unlock_db",
          MYSQL_DB_PASSWORD: "bot_password",
          MYSQL_DB_PORT: 3306,
          DB_LOG: "true",
          WHATSAPP_CHAT_GROUP_ID: "120363298355639950@g.us",
          PORT: 3009,
        }
      }
    ]
  };