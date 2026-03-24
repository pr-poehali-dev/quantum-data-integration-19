import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">DevPortfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                Обо мне
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Услуги
              </a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                Проекты
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Открыт для новых проектов</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Разрабатываю веб-приложения, которые <span className="text-blue-600">работают</span> на результат
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Full-stack разработчик с фокусом на чистый код, скорость и удобство пользователей.
                Беру задачу — довожу до готового продукта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Обсудить проект
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <Icon name="Code" size={24} />
                    <span className="font-semibold">React, TypeScript, Python</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" size={24} />
                    <span className="font-semibold">Быстрая сдача, чистый код</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={24} />
                    <span className="font-semibold">Работаю с бизнесом и стартапами</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="ShieldCheck" size={24} />
                    <span className="font-semibold">Поддержка после запуска</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Обо мне</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Full-stack разработчик с опытом создания продуктов с нуля до релиза
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Пишу код — думаю о продукте</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Более 5 лет занимаюсь разработкой веб-приложений для бизнеса, стартапов и digital-агентств.
                Умею слышать задачу, предлагать решения и выпускать продукт в срок. Работаю как самостоятельно,
                так и в команде.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">REST API</Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-600">30+</p>
                  <p className="text-sm text-slate-600">проектов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">5+</p>
                  <p className="text-sm text-slate-600">лет опыта</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">100%</p>
                  <p className="text-sm text-slate-600">довольных клиентов</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/ca1a3e44-75c4-499b-bfd3-b12987fbd89b/files/2d6d53dd-4f7d-4fd0-bec4-0f9cdaa392d4.jpg"
                alt="Рабочее место разработчика"
                className="rounded-2xl shadow-lg w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Чем могу помочь</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Разработка под ключ — от идеи до работающего продукта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Веб-разработка под ключ</CardTitle>
                <CardDescription>
                  Создам современное веб-приложение или сайт с нуля — от дизайна до деплоя.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ SPA и многостраничные сайты</li>
                  <li>✓ Личные кабинеты и дашборды</li>
                  <li>✓ Интеграция с CRM и API</li>
                  <li>✓ Адаптивный дизайн</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-green-600" />
                </div>
                <CardTitle>Оптимизация и доработка</CardTitle>
                <CardDescription>Разберусь в чужом коде, исправлю баги и ускорю существующий проект.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Рефакторинг и чистка кода</li>
                  <li>✓ Ускорение загрузки страниц</li>
                  <li>✓ SEO и Core Web Vitals</li>
                  <li>✓ Исправление критических ошибок</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Rocket" size={24} className="text-purple-600" />
                </div>
                <CardTitle>MVP для стартапов</CardTitle>
                <CardDescription>Помогу быстро запустить первую версию продукта и проверить гипотезу.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Минимальный жизнеспособный продукт</li>
                  <li>✓ Аутентификация и базы данных</li>
                  <li>✓ Платёжные интеграции</li>
                  <li>✓ Готов к масштабированию</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Избранные проекты</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Проекты, в которых я горжусь результатом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src="https://cdn.poehali.dev/projects/ca1a3e44-75c4-499b-bfd3-b12987fbd89b/files/059a6eac-b087-41bd-a12f-b9c440023b47.jpg"
                  alt="SaaS дашборд"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Аналитический дашборд</CardTitle>
                    <CardDescription>
                      SaaS-платформа с аналитикой в реальном времени, графиками и управлением командой.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="Github" size={16} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="ExternalLink" size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  <span>Запущен и приносит прибыль клиенту</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-green-500 to-blue-600">
                <img
                  src="https://cdn.poehali.dev/projects/ca1a3e44-75c4-499b-bfd3-b12987fbd89b/files/6f23ca4d-5751-4614-82a6-3ab159108b4b.jpg"
                  alt="Мобильное приложение"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Интернет-магазин</CardTitle>
                    <CardDescription>
                      Полноценный e-commerce с каталогом, корзиной, оплатой и личным кабинетом.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="Github" size={16} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="ExternalLink" size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  <span>Оборот клиента вырос на 40% после запуска</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готовы начать проект?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Напишите — обсудим задачу, сроки и стоимость. Отвечаю в течение нескольких часов.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Связаться со мной</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Работаю с бизнесами, стартапами и агентствами. Готов взяться за новый проект
                или помочь с доработкой существующего.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Github" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-slate-300">@your-github</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-slate-300">@your-telegram</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Расскажите о задаче — я свяжусь с вами и предложу решение.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Телефон / Telegram</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+7 999 000-00-00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Расскажите о проекте</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Что нужно сделать, в какие сроки, есть ли дизайн..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Отправить заявку
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-white mb-4 md:mb-0">DevPortfolio</div>
            <p className="text-center md:text-right">
              © 2026 DevPortfolio. Разрабатываю веб-приложения, которые работают на результат.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
