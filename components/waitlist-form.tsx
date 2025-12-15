"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { trackWaitlistSignup } from "@/components/analytics";

/**
 * Waitlist form component
 * Handles email signup with optional role selection
 * Shows success state after submission
 */
export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles form submission
   * Validates email and submits to API route
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          role: role || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Track successful waitlist signup
      trackWaitlistSignup("waitlist_form");

      setIsSuccess(true);
      setEmail("");
      setRole("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state UI
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center"
      >
        <div className="mb-2 text-lg font-semibold text-primary">
          You're on the list! 🎉
        </div>
        <p className="text-sm text-muted-foreground">
          We'll be in touch soon with early access details.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        {/* Email input - required */}
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
          className="flex-1"
          aria-label="Email address"
        />

        {/* Role selector - optional */}
        <Select
          value={role}
          onValueChange={setRole}
          disabled={isSubmitting}
        >
          <SelectTrigger className="w-full sm:w-[180px]" aria-label="Your role">
            <span className={role ? "" : "text-muted-foreground"}>
              {role || "Your role (optional)"}
            </span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="founder">Founder</SelectItem>
            <SelectItem value="marketer">Marketer</SelectItem>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Error message */}
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-red-500"
          role="alert"
        >
          {error}
        </motion.p>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Joining..." : "Get early access"}
      </Button>

      {/* Microcopy */}
      <p className="text-center text-xs text-muted-foreground">
        Early access · No spam · Cancel anytime
      </p>
    </form>
  );
}

