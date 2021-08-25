const PORT = 3102;
const BASE = `http://localhost:${PORT}`;
module.exports = {
  // The secret for the encryption of the jsonwebtoken
  JWTsecret: 'mysecret',
  BASE: BASE,
  PORT: PORT,
  // The credentials and information for OAuth2
  oauth2Credentials: {
    client_id: "294913243758-5oc6h2n364uo6fvcm0l9bdd3538b3pnq.apps.googleusercontent.com",
    project_id: "Question App - Leviathan dev.", // The name of your project
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "COzyQfx-3IE6woN1MB04OgnH",
    redirect_uris: [
      `${BASE}/auth_callback`
    ],
    scopes: [
      'https://www.googleapis.com/auth/youtube.readonly'
    ]
  }
};
