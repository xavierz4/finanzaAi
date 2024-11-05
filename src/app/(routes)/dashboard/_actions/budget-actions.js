// src/app/(routes)/dashboard/_actions/budget-actions.js
"use server";

import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { eq } from "drizzle-orm";

export async function checkUserBudgets(email) {
  try {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, email));

    return result;
  } catch (error) {
    console.error("Error checking budgets:", error);
    throw error;
  }
}
