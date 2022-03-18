import Login from "../features/Login";

interface IHomeProps {
  handleSignIn: () => void;
}

const Home = ({ handleSignIn }: IHomeProps) => {
  return (
    <div>
      <Login handleSignIn={handleSignIn}/>
    </div>
  );
};

export default Home;
