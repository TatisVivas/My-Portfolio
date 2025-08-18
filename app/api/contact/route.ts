export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Faltan campos" }), { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL

    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
      return new Response(JSON.stringify({ error: "Servidor no configurado" }), { status: 500 })
    }

    const payload = {
      from: "Portfolio <onboarding@resend.dev>",
      to: [CONTACT_TO_EMAIL],
      subject: "Nuevo mensaje desde el portafolio",
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      reply_to: email,
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error("Resend error:", errorText)
      return new Response(JSON.stringify({ error: "No se pudo enviar el correo" }), { status: 500 })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: "Error inesperado" }), { status: 500 })
  }
} 