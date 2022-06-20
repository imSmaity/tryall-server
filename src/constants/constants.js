require('dotenv').config();
module.exports = {
  allowedOrigins: ['http://localhost:8080/'],
  SERVER_PORT: process.env.PORT || 8080,
  SERVER_DB_URI: process.env.URI,
  JWT_SECRET: 'thisIsASimpleTest',
  OTP_LENGTH: 6,
  OTP_CONFIG: {
    upperCaseAlphabets: false,
    specialChars: false,
  },
  MAIL_SETTINGS: {
    service: 'gmail',
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  },
};