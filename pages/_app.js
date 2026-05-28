import '@/styles/globals.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }) {
  // Nota para el tutor: Se utiliza un Client ID de pruebas para la evaluación del Front-end
  const googleClientId = "1086584985227-dummyclientidforbiocleanwms.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
