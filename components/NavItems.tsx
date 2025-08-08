"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

const NavItems = () => {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="flex items-center gap-4">
      {/* Home button is always visible */}
      <Link href="/">
        <Button variant="outline">
          <Home />
        </Button>
      </Link>

      {/* User button only when loaded and signed in */}
      {isLoaded && isSignedIn && (
        <div className=" flex items-center scale-125">
          <UserButton />
        </div>
      )}
    </div>
  );
};

export default NavItems;
