import { useAuth } from 'oidc-react';

const LoggedIn = () => {
  const auth = useAuth();

  if (auth && auth.userData) {
    return (
      <div>
        <p>Jesteś zalogowany. Możesz się wylogowac w dowolnym momencie</p>
        <button onClick={() => auth.signOut()}>Wyloguj się</button>
      </div>
    )
  }

  return <div>Loading...</div>;
};

export default LoggedIn;
