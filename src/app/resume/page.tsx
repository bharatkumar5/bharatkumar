import Image from "next/image";
import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";

import { Card, CardContent } from "../components/Ui/card";
import Navigation from "../components/Navigation";
import profilePic from "./../../../public/myprofile.jpg";
import Footer from "../components/Ui/Footer";
export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Resume Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Card className="bg-zinc-900 text-white">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="bg-zinc-800 p-8">
                <div className="mb-8">
                  <Image
                    src={profilePic}
                    alt="Jurgen Hideni"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                  <h1 className="text-3xl font-bold text-center mt-4 ">
                    Bharat Kumar
                  </h1>
                  <p className="text-red-500 text-center">
                    Full Stack Developer
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-red-500" />
                    <span>bharatkumar18002@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-red-500" />
                    <span>+917229979903</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Pali , Rajasthan, India</span>
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="md:col-span-2 p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-red-500 mb-4">
                    Profile
                  </h2>
                  <p className="text-justify">
                    A highly motivated and detail-oriented Full Stack Developer
                    with a passion for building robust and scalable web
                    applications Proficient in both frontend and backend
                    technologies including HTML CSS JavaScript React
                    Node.js and databases. Experienced in developing
                    responsive user-friendly interfaces and integrating backend
                    services to create dynamic data-driven websites Strong
                    problem-solving abilities with a focus on clean
                    maintainable code and an eagerness to stay up-to-date with
                    the latest industry trends Adept at collaborating in
                    cross-functional teams ensuring the successful delivery of
                    high-quality solutions Excellent communication skills with
                    a commitment to learning and continuous professional growth
                    in a dynamic fast-paced environment
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-red-500 mb-4">
                    Education
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">
                        Software Development from Coursera
                      </h3>
                      <p className="text-sm text-gray-400">
                        17.03.2021 - 26.03.2022
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Graduation, Jodhpur Jai Narain Vyas University
                      </h3>
                      <p className="text-sm text-gray-400">10.2015 - 07.2019</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-red-500 mb-4">
                    Work Experience
                  </h2>
                  <div>
                    <h3 className="font-semibold">
                      Full Stack developer, Covenant Security Solutions
                    </h3>
                    <p className="text-sm text-gray-400">12.2023 - 07.2024</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Full Stack developer, Fintech IT solution
                    </h3>
                    <p className="text-sm text-gray-400">09.2022 - 10.2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-zinc-800 p-8">
              <div>
                <h2 className="text-2xl font-bold text-red-500 mb-4">
                  Languages
                </h2>
                <ul className="list-disc list-inside">
                  <li>Hindi - Native</li>
                  <li>English - B2</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-red-500 mb-4">
                  Soft Skills
                </h2>
                <ul className="list-disc list-inside">
                  <li>Quick Learner</li>
                  <li>Teamwork</li>
                  <li>Problem Solving skills</li>
                  <li>Adaptability</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-red-500 mb-4">
                  Technical Skills
                </h2>
                <ul className="list-disc list-inside">
                  <li>Knowledge of HTML and CSS</li>
                  <li>Javascript</li>
                  <li>c++</li>
                  <li>
                    Understanding of frameworks (React NextJs Nodejs React
                    native)
                  </li>
                  <li>Problem Solving skills</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>

            {/* GitHub Section */}
            <div className="bg-zinc-900 p-8">
              <h2 className="text-2xl font-bold text-red-500 mb-4">GitHub</h2>
              <a
                href="https://github.com/bharatkumar5?tab=repositories"
                className="text-blue-400 hover:underline"
              >
                https://github.com/bharatkumar5?tab=repositories
              </a>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Lets work together on your next project
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Collaboration is key Lets join forces and combine our skills to
            tackle your next project with a powerful synergy that guarantees
            success
          </p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded inline-block text-center"
          >
            Contact me
          </Link>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
