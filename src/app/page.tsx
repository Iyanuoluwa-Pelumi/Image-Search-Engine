"use client";
import SearchBar from "@/components/SearchBar";
import ImageGrid from "@/components/ImageGrid";
import useImageSearch from "@/hooks/useImageSearch";

export default function HomePage() {
  const { data, loading, error, search } = useImageSearch();

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Image Search</h1>

      <SearchBar onSearch={search} />

      {error && <p className="text-red-500">Error: {error}</p>}
      {loading && <p>Loading...</p>}

      <ImageGrid items={data} />
    </main>
  );
}
