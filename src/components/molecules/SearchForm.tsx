"use client";
import React from "react";
import { Button } from "../atoms/Button";

interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  placeholder = "Пошук...",
}) => {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button type="submit">Пошук</Button>
    </form>
  );
};
