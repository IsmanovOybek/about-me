import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "ismanovoybek75@gmail.com";

interface ContactBody {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendWithSmtp(payload: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  const user = process.env.GMAIL_USER ?? CONTACT_TO;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

  if (!pass) {
    throw new Error("GMAIL_APP_PASSWORD is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${user}>`,
    to: CONTACT_TO,
    replyTo: payload.email,
    subject: `Portfolio contact from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      "",
      payload.message,
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br />")}</p>
    `,
  });
}

async function sendWithFormSubmit(payload: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        message: payload.message,
        _subject: `Portfolio contact from ${payload.name}`,
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`FormSubmit failed: ${response.status} ${detail}`);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = isNonEmptyString(body.name) ? body.name.trim() : "";
    const email = isNonEmptyString(body.email) ? body.email.trim() : "";
    const message = isNonEmptyString(body.message) ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (process.env.GMAIL_APP_PASSWORD) {
      try {
        await sendWithSmtp({ name, email, message });
      } catch (smtpError) {
        console.error("Gmail SMTP failed, falling back to FormSubmit:", smtpError);
        await sendWithFormSubmit({ name, email, message });
      }
    } else {
      await sendWithFormSubmit({ name, email, message });
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 },
    );
  }
}
