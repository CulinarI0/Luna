import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MatchIOLogo from "../assets/MatchIOLogo.png";
import SearchComponent from "./SearchBar";

export function HeaderButtons() {
  return (
    <header className="bg-[#FAFAFA] py-2" >
      <div className="flex items-center justify-between mx-auto max-w-screen-xl max-h-[100px]">
        {/* Left side: Image and Search */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={MatchIOLogo}
              alt="MatchIOLogo"
              width={175}
              height={50} 
            />
          </Link>
          <SearchComponent />
        </div>

        {/* Right side: Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button label="Match" />
          </Link>
          <Link href="/discover">
            <Button label="All Resources" />
          </Link>
          <Link href="/login">
            <Button label="Log In" />
          </Link>
          <Link href="/signup">
            <Button label="Free Sign Up" />
          </Link>
        </div>
      </div>
    </header>
  );
}
