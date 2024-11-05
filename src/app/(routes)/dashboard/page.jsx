// app/(routes)/dashboard/page.jsx
"use client";


import { UserButton, useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function DashboardPage() {
    const {user} = useUser();
    
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Hola </h1>
      
      {/* Más contenido del dashboard aquí */}
    </div>
   
  );
}
