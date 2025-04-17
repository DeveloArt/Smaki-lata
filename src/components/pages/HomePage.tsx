"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClientParams } from "../../helpers/queryClientParams";
import { MainLayout } from "../templates/MainLayout";
import {
  fetchUserData,
  getCurrentUserUid,
} from "@/api/userOperations";
export const HomePage: React.FC = () => {
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const { data: dataCurrentUser } = useQuery(
    {
      queryKey: ['user'],
      queryFn: async () => await fetchUserData(currentUserId),
    },
    queryClientParams
  );
  console.log('dataCurrentUser', dataCurrentUser);

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
      </section>
    </MainLayout>
  );
};
