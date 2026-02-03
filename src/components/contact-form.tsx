import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    description: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://functions.poehali.dev/e37f18d5-cedd-43db-b427-cf691f7ddd06', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        toast({
          title: "Заявка отправлена!",
          description: "Я свяжусь с вами в ближайшее время.",
        })
        setFormData({ name: "", contact: "", description: "" })
      } else {
        throw new Error(data.error || 'Failed to send')
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте снова.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Ваше имя
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Как к вам обращаться?"
          required
          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact" className="text-white">
          Контакт для связи
        </Label>
        <Input
          id="contact"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          placeholder="Discord, Telegram или Email"
          required
          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">
          Описание проекта
        </Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Расскажите, что вы хотите заказать..."
          required
          rows={5}
          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white hover:bg-white/90 text-black font-medium text-lg py-6"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </Button>
    </form>
  )
}