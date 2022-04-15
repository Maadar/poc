import { useState } from 'react';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app'
import { useRouter } from 'next/router';

const oidcConfig = {
  authority: "https://go.uphellas.gr/auth/realms/pheme/.well-known/openid-configuration",
  redirectUri: "http://localhost:3000/dashboard/",
  responseType: 'id_token token',
  scope: "openid profile roles",
  clientId: "next-client",
};

const AuthProvider = dynamic(
  async () => {
    return (await import("oidc-react")).AuthProvider;
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [triggerLogin, setTriggerLogin] = useState(false);

  const handleSignIn = () => {
    setTriggerLogin(true);
  };

  const onSignIn = () => {
    router.push("/dashboard/");
  };

  const handleOnSignOut = () => {
    router.push("/");
  };

  return (
    <AuthProvider
      onSignIn={onSignIn}
      onSignOut={handleOnSignOut}
      autoSignIn={triggerLogin}
      {...oidcConfig}
    >
      <Component
        handleSignIn={handleSignIn}
        {...pageProps}
      />
    </AuthProvider>
  )
}

export default MyApp;
