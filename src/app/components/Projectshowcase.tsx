'use client'

import { useState } from "react"
import { Card, CardContent } from "./Ui/MediaCard"
import Navigation from "./Navigation"
import Footer from "./Ui/Footer"
interface Project {
  id: string
  title: string
  description: string
  mediaUrl: string
  mediaType: 'video' | 'gif'
}

// Sample projects data
const projects: Project[] = [
    {
        id: '1',
        title: 'Balaji Food',
        description: 'Balaji Food is a leading manufacturer of high-quality papad, pasta, and soya chunks. We specialize in producing delicious and nutritious food products that cater to a variety of tastes and dietary needs. With a commitment to quality and innovation, Balaji Food ensures that every product is made with the finest ingredients, providing consumers with a wholesome experience.',
        mediaUrl: 'https://vimeo.com/1042479242', // Example Vimeo URL
        mediaType: 'video'
      }
      ,
      {
        id: '2',
        title: 'Stone Business',
        description: 'Stone Business is a premier supplier of high-quality stone products for construction and interior design. Specializing in a wide range of stone types, we provide durable and aesthetic materials for various applications. From marble and granite to limestone and slate, our stones are sourced globally to meet the highest industry standards, offering both functionality and beauty.',
        mediaUrl: 'https://vimeo.com/1042484084',
        mediaType: 'video'
      }
      
]

export default function ProjectShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Navigation />
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Featured Projects</h1>
        <p className="text-gray-400">
          Explore my latest work and creative experiments
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card 
            key={project.id}
            className="bg-zinc-900 border-zinc-800 overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <CardContent className="p-0">
              {/* Media Container */}
              <div className="relative aspect-video">
                {project.mediaType === 'video' ? (
                  // Check if it's a Vimeo URL, then embed with iframe
                  project.mediaUrl.includes('vimeo.com') ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${project.mediaUrl.split('/')[3]}`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    />
                  ) : (
                    <video
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      onMouseEnter={(e) => {
                        setHoveredId(project.id);
                        e.currentTarget.play();
                      }}
                      onMouseLeave={(e) => {
                        setHoveredId(null);
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      ref={(el) => {
                        if (el && hoveredId === project.id) {
                          el.play();
                        }
                      }}
                    >
                      <source src={project.mediaUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  <img
                    src={project.mediaUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Lets work together on your next project</h2>
        <p className="text-gray-400 mb-8">
          Collaboration is key! Lets join forces and combine our skills to tackle your next project with a
          powerful synergy that guarantees success
        </p>
        
        {/* Contact Cards */}
<Footer/>
      </div>
    </div>
  )
}
