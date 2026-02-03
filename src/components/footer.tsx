import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              SWAG.<span className="text-white/60">DESIGN</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Профессиональный 3D дизайн для Roblox. Создаю уникальные работы для ваших проектов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#works"
                  className="font-space-mono text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Работы
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-space-mono text-gray-400 hover:text-white transition-colors duration-200"
                >
                  О дизайнере
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-space-mono text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 SWAG.DESIGN</p>
          </div>
        </div>
      </div>
    </footer>
  )
}