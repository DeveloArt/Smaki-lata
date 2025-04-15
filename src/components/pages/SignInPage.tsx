"use client";
import React, { useEffect, useState } from "react";
import { MainLayout } from "../templates/MainLayout";
import { SignInForm } from "../molecules/SignInForm";
import { SubmitHandler } from "react-hook-form";
import {
  fetchUserData,
  getCurrentUserUid,
  signInWithEmail,
} from "@/api/userOperations";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { queryClientParams } from "@/helpers/queryClientParams";

interface IInputs {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export const SignInPage: React.FC = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string>("");
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);
  const onSubmit: SubmitHandler<IInputs> = async ({ email, password }) => {
    try {
      // setIsLoading(true);
      setLoginError(null);
      await signInWithEmail(email, password, setLoginError, setIsLoggedIn);
      router.push("/home");
    } catch (error) {
      console.log(loginError);

      console.error(
        "Помилка входу. Перевірте дані та спробуйте ще раз.",
        error
      );
    } finally {
      // setIsLoading(false);
    }
  };

  if (currentUserId) {
    fetchUserData(currentUserId).then((data) =>
      queryClient.setQueryData(["user"], data)
    );
  }

  const { data: dataCurrentUser } = useQuery(
    {
      queryKey: ["user"],
      queryFn: async () => await fetchUserData(currentUserId),
    },
    queryClientParams
  );
  if (dataCurrentUser && dataCurrentUser.access === "admin") {
    router.push("/home");
  }
  useEffect(() => {
    if (isLoggedIn) {
      getCurrentUserUid()
        .then((user) => {
          if (typeof user === "string") {
            setCurrentUserId(user);
          }
        })
        .catch((error) => {
          console.error("Error getting current user:", error);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    getCurrentUserUid()
      .then((user) => {
        if (typeof user === "string") {
          setCurrentUserId(user);
        }
      })
      .catch((error) => {
        console.error("Error getting current user:", error);
      });
  }, []);
  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md">
          {token ? <p>Loading.....</p> : <SignInForm onSubmit={onSubmit} />}
        </div>
      </div>
    </MainLayout>
  );
};
