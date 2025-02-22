import { NextResponse } from "next/server";
import { Resend } from "resend";
import Apply from "@/app/emails/Apply";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, cause, message, amount } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "snr.mn.lordson@gmail.com",
      subject: "You have been contacted for an appeal",
      react: Apply({ name, email, cause, message, amount }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
