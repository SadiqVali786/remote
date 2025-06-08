import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const searchParms = req.nextUrl.searchParams;
  const query = searchParms.get("number");

  if (!query && isNaN(Number(query)))
    return NextResponse.json({
      number: query,
      isPrime: false,
      error: "Invalid number",
    });

  const num = Number(query);

  // Numbers less than or equal to 1 are not prime
  if (num <= 1) return NextResponse.json({ number: num, isPrime: false });
  // 2 and 3 are prime numbers
  if (num <= 3) return NextResponse.json({ number: num, isPrime: false });
  // Eliminate multiples of 2 and 3
  if (num % 2 === 0 || num % 3 === 0)
    return NextResponse.json({ number: num, isPrime: false });

  // Check for divisibility using 6k ± 1 optimization
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0)
      return NextResponse.json({ number: num, isPrime: false });
  }

  // If no divisors found, it's a prime number
  return NextResponse.json({ number: num, isPrime: true });
};
