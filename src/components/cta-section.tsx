import { ContactForm } from "@/components/contact-form"

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-5xl font-bold text-white mb-6 font-sans text-balance">
            Готовы заказать дизайн?
          </h2>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Заполните форму ниже, и я свяжусь с вами для обсуждения вашего проекта. 
            Работаю над уникальными 3D дизайнами для Roblox.
          </p>
        </div>
        <div className="slide-up" style={{ animationDelay: "0.2s" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}