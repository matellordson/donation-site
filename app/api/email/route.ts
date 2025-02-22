import { NextResponse } from "next/server";
import { Resend } from "resend";
import Contact from "@/app/emails/Contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "snr.mn.lordson@gmail.com",
      subject: "You have been contacted",
      react: Contact({ name, email, subject, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
