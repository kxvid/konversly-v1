"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  industry: z.string().min(1, "Please select an industry"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
})

export async function requestDemo(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    industry: formData.get("industry"),
    date: formData.get("date"),
    time: formData.get("time"),
  })

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  const { name, email, company, industry, date, time } = validatedFields.data

  console.log("--- DEMO REQUEST ---")
  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Company:", company)
  console.log("Industry:", industry)
  console.log("Date:", date)
  console.log("Time:", time)
  console.log("--------------------")

  // In a real application, you would use a service like Resend or Nodemailer here
  // Example with Resend:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // try {
  //   await resend.emails.send({
  //     from: 'demo@yourdomain.com',
  //     to: 'your-sales-email@yourdomain.com',
  //     subject: `New Demo Request from ${name}`,
  //     html: `<p><strong>Name:</strong> ${name}</p>
  //            <p><strong>Email:</strong> ${email}</p>
  //            <p><strong>Company:</strong> ${company}</p>
  //            <p><strong>Industry:</strong> ${industry}</p>
  //            <p><strong>Requested Time:</strong> ${date} at ${time}</p>`,
  //   });
  //
  //   return { message: 'Demo request submitted successfully!', success: true };
  // } catch (error) {
  //   console.error('Email sending error:', error);
  //   return { message: 'Failed to send demo request.', success: false };
  // }

  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { message: "Demo request submitted successfully!", success: true }
}
