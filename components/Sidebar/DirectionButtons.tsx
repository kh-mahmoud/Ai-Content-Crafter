"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

const DirectionButtons = () => {
    const {state} = useSidebar()
  return (
    <div className={`w-full h-full flex flex-col md:flex-row justify-center items-center transition-all gap-2 ${state=="collapsed" && "hidden"} `}>
      <Link href={"/sign-up"}>
        <Button className="font-bold">SignUp</Button>
      </Link>

      <Link href={"/sign-in"}>
        <Button className="font-bold">SignIn</Button>
      </Link>
    </div>
  );
};

export default DirectionButtons;
