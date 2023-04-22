'use client';

import { FC, useState } from 'react';
import Button from '@/ui/Button';
import { signOut } from 'next-auth/react';
import { toast } from '@/ui/Toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutUser = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={signOutUser} isLoading={isLoading}>
      SignIn
    </Button>
  );
};

export default SignOutButton;
