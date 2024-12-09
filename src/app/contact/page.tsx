import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from "./../components/Ui/button"
import { Card, CardContent } from "./../components/Ui/card"
import Navigation from "../components/Navigation"
import Footer from "../components/Ui/Footer"
export default function ContactPage() {

 
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
<Navigation/>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">I&apos;d love to hear from you!!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Email Card */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="h-12 w-12 rounded-full bg-red-600/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Email</h2>
                <a href="mailto:jurgenhideni@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                  bharatkumar18002@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="h-12 w-12 rounded-full bg-red-600/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Phone</h2>
                <a href="tel:+355695486984" className="text-zinc-400 hover:text-white transition-colors">
                  +917229979903
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Lets work together on your next project
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Collaboration is key! Let's join forces and combine our skills to tackle your next
            project with a powerful synergy that guarantees success.
          </p>

        </section>
      </main>

      {/* Footer */}
<Footer/>
    </div>
  )
}

