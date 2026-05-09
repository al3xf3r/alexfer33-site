// src/app/api/pac/assets/route.ts

import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("assets")
      .select("*")
      .eq("is_active", true)
      .order("monthly_amount", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      assets: data,
    });
  } catch (error) {
    console.error("PAC assets API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}