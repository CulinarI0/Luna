"use client";
import Link from "next/link";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = async () => {
    const mockSearchResultsults = ["Result 1", "Result 2", "Result 3"];

    setResults(mockSearchResultsults);
  };
  return (
    <div>
      Hello <Link href="/">search</Link>
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-2xl font-semibold">Search Page</h1>
        <div className="mt-4">
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-lg w-64"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="mt-8">
          {results.length > 0 ? (
            <ul>
              {results.map((result, index) => (
                <li key={index} className="mb-2">
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}
