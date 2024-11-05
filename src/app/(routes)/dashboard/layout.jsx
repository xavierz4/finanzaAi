// src/app/(routes)/dashboard/layout.jsx
"use client";

import React from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import BudgetChecker from "./_components/BudgetChecker";

export default function DashboardLayout({ children }) {
  return (
    <BudgetChecker>
      <div>
        <div className="fixed md:w-64 hidden md:block">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </BudgetChecker>
  );
}
