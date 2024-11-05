// src/app/(routes)/dashboard/budgets/page.jsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function BudgetsPage() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !amount) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      const response = await fetch("/api/budgets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          amount,
          createdBy: user?.primaryEmailAddress?.emailAddress,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al crear el presupuesto");
      }

      // Redirigir al dashboard después de crear el presupuesto
      router.push("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al crear el presupuesto");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Crear Presupuesto</h1>
      <div className="bg-white rounded-lg p-6 shadow max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del Presupuesto
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ej: Gastos Mensuales"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monto
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Crear Presupuesto
          </button>
        </form>
      </div>
    </div>
  );
}
