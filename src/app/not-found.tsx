import React from "react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Sorry, the page you're looking for doesn't exist.</p>
      <Button asChild>
        <a href="/">Go Home</a>
      </Button>
    </div>
  );
} 