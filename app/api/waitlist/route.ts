import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * API route handler for waitlist signups
 * Validates input and stores in Supabase waitlist_signups table
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, role } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error: insertError } = await supabase
      .from("waitlist_signups")
      .insert({
        email: email.toLowerCase().trim(),
        role: role || null,
        source: "landing",
        created_at: new Date().toISOString(),
      });

    if (insertError) {
      // Handle duplicate email error gracefully
      if (insertError.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist" },
          { status: 409 }
        );
      }

      console.error("Supabase error:", insertError);
      return NextResponse.json(
        { error: "Failed to add to waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully added to waitlist" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


