import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest) {
  return NextResponse.rewrite(req.nextUrl)
}