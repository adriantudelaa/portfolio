// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed")

  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  })

  // 📩 Correo para TI (corporativo, con HTML)
  const internalMail = {
    from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
    to: "info.atudela@gmail.com",
    subject: "📬 Nuevo Contacto desde tu Portfolio",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
        <div style="background: #0d6efd; color: white; padding: 16px; text-align: center;">
          <h2 style="margin: 0;">Nuevo mensaje recibido</h2>
        </div>
        <div style="padding: 20px; color: #333;">
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-line; background: #f8f9fa; padding: 10px; border-radius: 5px;">
            ${message}
          </p>
        </div>
        <div style="background: #f1f1f1; text-align: center; padding: 12px; font-size: 12px; color: #666;">
          Portfolio de Adrián Tudela · Este correo se generó automáticamente
        </div>
      </div>
    `,
  }

  // 📩 Correo de confirmación al usuario
  const confirmationMail = {
    from: `"Adrián Tudela" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: "✅ Hemos recibido tu mensaje",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
        <div style="background: #198754; color: white; padding: 16px; text-align: center;">
          <h2 style="margin: 0;">¡Gracias por contactarme!</h2>
        </div>
        <div style="padding: 20px; color: #333;">
          <p>Hola <strong>${name}</strong>,</p>
          <p>He recibido tu mensaje correctamente y en breve me pondré en contacto contigo.</p>
          <p><strong>Resumen de tu mensaje:</strong></p>
          <p style="white-space: pre-line; background: #f8f9fa; padding: 10px; border-radius: 5px;">
            ${message}
          </p>
          <p>Gracias por confiar en mí,<br/>Adrián Tudela</p>
        </div>
        <div style="background: #f1f1f1; text-align: center; padding: 12px; font-size: 12px; color: #666;">
          Portfolio de Adrián Tudela · Este correo se generó automáticamente
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(internalMail) // se envía a ti
    await transporter.sendMail(confirmationMail) // se envía al usuario

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error("Error al enviar correo:", error)
    return res.status(500).json({ success: false, error })
  }
}
