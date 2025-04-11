"use client";
import React from "react";
import { Button } from "../atoms/Button";

interface LoginFormProps {
  onSearch: (query: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"email"}
        className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"password"}
        className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button type="submit">login</Button>
    </form>
  );
};
