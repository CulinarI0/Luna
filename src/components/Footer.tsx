import Link from "next/link";

export function FooterButtons() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link
          href="/search"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Search
        </Link>
        <Link
          href="/match"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Match
        </Link>
        <Link
          href="/discover"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
        >
          Discover
        </Link>
        <Link
          href="/recipes"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
        >
          Recipes
        </Link>
      </div>
    </footer>
  );
}
