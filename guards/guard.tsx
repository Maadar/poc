import { useAuth } from 'oidc-react';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

const Guard = ({ children }: PropsWithChildren<{}>) => {
  const auth = useAuth();
  const router = useRouter();

  if (!auth.userData && !auth.isLoading) {
    router.push("/");
  }

  if (!auth.userData && !auth.isLoading) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
};

export default Guard;
