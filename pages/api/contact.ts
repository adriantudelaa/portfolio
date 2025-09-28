// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
    to: "adri40295@gmail.com",
    subject: "Nuevo Contacto Portfolio",
    text: `
      Has recibido un nuevo mensaje desde tu portfolio:

      Nombre: ${name}
      Email: ${email}
      Mensaje:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return res.status(500).json({ success: false, error });
  }
}
