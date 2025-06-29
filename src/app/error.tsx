"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-8">{error.message}</p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
} 