"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
})

export async function startTrial(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    role: formData.get("role"),
  })

  if (!validatedFields.success) {
    return {
      message: "Invalid form data.",
      success: false,
    }
  }

  const { name, email, company, role } = validatedFields.data

  console.log("--- TRIAL REQUEST ---")
  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Company:", company)
  console.log("Role:", role)
  console.log("--------------------")

  // Here you would integrate with your backend, CRM, or email marketing service.
  // For example, sending an email with Resend:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // await resend.emails.send({
  //   from: 'onboarding@yourdomain.com',
  //   to: email,
  //   subject: 'Welcome to your Konversly Free Trial!',
  //   html: `<p>Hi ${name},</p><p>Welcome to your 14-day free trial of Konversly...</p>`,
  // });
  //
  // await resend.emails.send({
  //   from: 'notifications@yourdomain.com',
  //   to: 'your-sales-email@yourdomain.com',
  //   subject: 'New Trial Signup',
  //   html: `<p>New trial started by ${name} (${email}) from ${company}.</p>`,
  // });

  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { message: "Trial started successfully!", success: true }
}
