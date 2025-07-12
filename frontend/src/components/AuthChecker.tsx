"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/authService';

export default function AuthChecker({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await AuthService.getCurrentUser();
        if (!user) {
          router.push('/auth');
        }
      } catch {
        router.push('/auth');
      }
    };

    checkAuth();
  }, [router]);

  return <>{children}</>;
}
