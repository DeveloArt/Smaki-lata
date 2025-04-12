"use client";
import React from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

interface LoginFormProps {
  onSearch: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSearch }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"email"}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"password"}
      />
      <Button type="submit">login</Button>
    </form>
  );
};
