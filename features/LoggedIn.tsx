import { useAuth } from 'oidc-react';
import { getProfile } from "../data_access/getProfile";

const LoggedIn = () => {
  const auth = useAuth();
  // mock api call
  const profile = getProfile();

  if (auth && auth.userData) {
    return (
      <div>
        <p>Jesteś zalogowany. Możesz się wylogowac w dowolnym momencie</p>
        <button
          onClick={
            () => auth.signOutRedirect('https://go.uphellas.gr/auth/realms/pheme/protocol/openid-connect/logout?redirect_uri=http://localhost:3000/dashboard/')
          }
        >
          Wyloguj się
        </button>
      </div>
    )
  }

  return <div>Loading...</div>;
};

export default LoggedIn;
