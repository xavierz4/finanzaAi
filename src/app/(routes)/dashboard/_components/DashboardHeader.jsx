import { UserButton } from "@clerk/nextjs";
import React from "react";

function DashboarHeader() {
    <div className="p-5 shadow-sm flex justify-between border-b">
      <div></div>
      <div>
        <UserButton signOutUrl="" />
      </div>
    </div>;
}

export default DashboarHeader;