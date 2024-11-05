"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function DashboardHeader() {
  return (
    <div className="p-5 shadow-sm flex justify-between border-b">
      <div></div>
      <div>
        <UserButton signOutUrl="/" />
      </div>
    </div>
  );
}

export default DashboardHeader;
