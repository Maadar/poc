import { useAuth } from 'oidc-react';

interface ILoginProps {
  handleSignIn: () => void;
}

const Login = ({ handleSignIn }: ILoginProps) => {
  const auth = useAuth();

  if (auth && auth.userData) {
    return <div>Jesteś zalogowany</div>
  }

  return (
    <div>
      <p>Nie jesteś jeszcze zalogowany</p>
      <button onClick={handleSignIn}>Zaloguj</button>
    </div>
  );
};

export default Login;
