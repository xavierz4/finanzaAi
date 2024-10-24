"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from 'next/link'


function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        {/*Logo*/}
        <Image src={"/logo.svg"} alt={"logo"} width={65} height={35} />
        <span className="text-yellow-600 font-bold text-xl p-1">
          FinanSmart
        </span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full" >Dashboard</Button>
          </Link>
          <Link href="/dashboard">
            <Button className="rounded-full" >iniciar</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
