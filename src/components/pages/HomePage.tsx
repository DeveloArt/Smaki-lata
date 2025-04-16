'use client';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryClientParams } from '../../helpers/queryClientParams';
import { MainLayout } from '../templates/MainLayout';
import { fetchUserData, getCurrentUserUid, logoutUser } from '@/api/userOperations';
import { useRouter } from 'next/navigation';
export const HomePage: React.FC = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [currentUserId, setCurrentUserId] = useState<string>('');

  const { data: dataCurrentUser } = useQuery(
    {
      queryKey: ['user'],
      queryFn: async () => await fetchUserData(currentUserId),
    },
    queryClientParams
  );
  console.log('dataCurrentUser', dataCurrentUser);
  const handleLogout = async () => {
    try {
      await logoutUser();
      queryClient.setQueryData(['user'], null);
      router.push('/');
    } catch (error) {
      console.log('Error logout', error);
    }
  };
  useEffect(() => {
    getCurrentUserUid().then(user => {
      if (typeof user === 'string') {
        console.log(user);

        setCurrentUserId(user);
      }
    });
  }, []);

  return (
    <MainLayout>
      <section className="flex justify-center items-center flex-col gap-4">
        <div>
          <p>login user - {dataCurrentUser?.email}</p>
          <p>first name - {dataCurrentUser?.firstName}</p>
          <p>last name - {dataCurrentUser?.lastName}</p>
        </div>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
        <button className="btn" onClick={() => router.back()}>
          go back
        </button>
      </section>
    </MainLayout>
  );
};
