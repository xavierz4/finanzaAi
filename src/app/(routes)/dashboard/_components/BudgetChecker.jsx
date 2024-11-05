// src/app/(routes)/dashboard/_components/BudgetChecker.jsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { checkUserBudgets } from "../_actions/budget-actions";

export default function BudgetChecker({ children }) {
  const { user } = useUser();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const verifyBudgets = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        try {
          const result = await checkUserBudgets(
            user.primaryEmailAddress.emailAddress
          );

          if (!result || result.length === 0) {
            router.replace("/dashboard/budgets");
          }
        } catch (error) {
          console.error("Error verifying budgets:", error);
        } finally {
          setIsChecking(false);
        }
      }
    };

    if (user) {
      verifyBudgets();
    }
  }, [user, router]);

  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return children;
}
