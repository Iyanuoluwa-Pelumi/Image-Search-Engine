"use client";
import { Search } from 'lucide-react';
import { useState } from "react";

type Props = { onSearch: (query: string) => void };

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim()) onSearch(value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search images..."
        className="flex-1 border px-3 py-2 rounded"
      />

      <button
        type='submit'
        className="hidden cursor-pointer sm:block bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>

      <button
        type="submit"
        className="sm:hidden p-2 rounded-full hover:bg-blue-100 transition">
        
        <Search className="sm:hidden right-16 text-blue-500" size={30} />
      </button>
    </form>
  );
}
