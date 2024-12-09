import Image from "next/image"
import Link from "next/link"
import Navigation from "./components/Navigation"
import { Facebook, Instagram, Linkedin, Download } from 'lucide-react'
import { Button } from "./components/Ui/button"
import { Badge } from "./components/Ui/badge"
import profilePic from './../../public/bharat2.png'
import profile from './../../public/bharatstand.png'
import Footer from "./components/Ui/Footer"
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
     <Navigation/>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-16">
        <div className="space-y-6">
          <div>
            <p className="text-red-600">Hello, My Name Is</p>
            <h1 className="text-5xl font-bold mt-2">Bharat Kumar</h1>
          </div>
          <p className="text-white/70 max-w-md">
            A passionate and dedicated Full Stack developer, driven by the
            ever-evolving world of technology and its limitless possibilities.
          </p>
          <Link
      href="/contact"
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded inline-block text-center"
    >
      Contact me
    </Link>
        </div>
        <div className="relative h-[400px] bg-neutral-900	">
          <Image
        src={profile}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-16">
        <div className="relative h-[400px]">
          <Image
            src={profilePic}
            alt="Working"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            <span className="text-red-600">About me</span>
            <br />Who Am I
          </h2>
          <p className="text-white/70 text-justify">
My name is Bharat Kumar, and I am a dedicated Full Stack Developer with a passion for building seamless, efficient, and visually engaging web and mobile applications. Combining my expertise in both frontend and backend technologies, I thrive on bringing creative ideas to life while ensuring robust functionality and exceptional user experiences.

          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">CSS</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">React Native</Badge>
            <Badge variant="secondary">Node js</Badge>
          </div>
          <Link
  href="/cv.pdf"
  download
  className="block mt-6" 
  target="_blank"
>
  <Button className="bg-red-600 hover:bg-red-700">
    <Download className="mr-3 h-4 w-4" /> Download CV
  </Button>
</Link>

        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h3 className="text-lg text-white/70">My Services</h3>
          <h2 className="text-2xl font-bold">What Can I Do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-lg space-y-4 hover:bg-zinc-800 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center text-red-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Lets work together on your next project
        </h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Looking forward to help you bring and provide my skills to solve your next
          project with a great UI/UX design.
        </p>
        <Link
      href="/contact"
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded inline-block text-center"
    >
      Contact me
    </Link>
      </section>

      {/* Footer */}
    <Footer/>
    </div>
  )
}

const services = [
  {
    icon: <span className="text-2xl">🎨</span>,
    title: "Creative Design",
    description: "Creating stylish and modern designs that catch the eye",
  },
  {
    icon: <span className="text-2xl">💻</span>,
    title: "Web Development",
    description: "Building fast and responsive websites with modern technologies",
  },
  {
    icon: <span className="text-2xl">📱</span>,
    title: "Mobile Development",
    description: "Ensuring great experience across all devices",
  },
  {
    icon: <span className="text-2xl">👥</span>,
    title: "User Experience",
    description: "Designing intuitive and engaging user interfaces",
  },
  {
    icon: <span className="text-2xl">🔧</span>,
    title: "Tech Support",
    description: "Providing ongoing technical support and maintenance",
  },
  {
    icon: <span className="text-2xl">🎯</span>,
    title: "Ai Integration",
    description: "Integrating AI solutions to transform everyday processes into intelligent",
  },
]

