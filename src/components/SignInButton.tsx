'use client';

import { FC, useState } from 'react';
import Button from '@/ui/Button';
import { signIn } from 'next-auth/react';
import { toast } from '@/ui/Toast';

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithgoogle = async () => {
    setIsLoading(true);
    try {
      await signIn('google');
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={signInWithgoogle} isLoading={isLoading}>
      SignIn
    </Button>
  );
};

export default SignInButton;
