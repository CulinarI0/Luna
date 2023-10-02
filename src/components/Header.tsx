import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import CulinarIOLogo from "../assets/oi.png";
import SearchComponent from "./SearchBar"

export function HeaderButtons() {
  return (
    <header className="bg-[#F9EFE5] py-4">
      <div className="flex items-center justify-center gap-2">
        <div className="absolute left-0 py-2">
      <Image src={CulinarIOLogo} alt="CulinarIOLogo" width={175} height={100}/>
        </div>
        <SearchComponent/>
        <Link
          href="/match">
          <Button label="Match"/>
        </Link>
        <Link
          href="/discover">
          <Button label="Discover"/>
        </Link>
        <Link
          href="/recipes">
          <Button label="Recipes"/>
        </Link>
      </div>
    </header>
  );
}
