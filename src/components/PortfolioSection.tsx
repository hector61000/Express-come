import { useEffect, useState } from 'react';

export const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/180733f6-df59-4990-a60e-b892ec975c97.png",
      title: "مشروع 1"
    },
    {
      id: 2,
      image: "/lovable-uploads/a463352f-010c-4c9d-b1d8-3527f67986ab.png",
      title: "مشروع 2"
    },
    {
      id: 3,
      image: "/lovable-uploads/af464e9d-ade3-4ea3-85ba-b1ed2be1ac3a.png",
      title: "مشروع 3"
    },
    {
      id: 4,
      image: "/lovable-uploads/d95b790e-bf45-410b-9b3f-0852d47edf4d.png",
      title: "مشروع 4"
    },
    {
      id: 5,
      image: "/lovable-uploads/e1eca2e5-3149-4c0e-bb63-4ec8daf53e48.png",
      title: "مشروع 5"
    },
    {
      id: 6,
      image: "/lovable-uploads/e8cc55cd-78e6-4feb-b3ed-454994a7c73f.png",
      title: "مشروع 6"
    },
    {
      id: 7,
      image: "/lovable-uploads/6d09ee7e-4e62-491c-86b5-91ccbc1e4f4c.png",
      title: "مشروع 7"
    },
    {
      id: 8,
      image: "/lovable-uploads/27ff4a97-b611-44c7-92d2-7bafcb22bfc9.png",
      title: "مشروع 8"
    },
    {
      id: 9,
      image: "/lovable-uploads/80df9451-829d-4587-867d-f476d28bde88.png",
      title: "مشروع 9"
    },
    {
      id: 10,
      image: "/lovable-uploads/154b2498-36d6-4188-96d7-2a714991d49b.png",
      title: "مشروع 10"
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-[#ff6b00]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">أعمالنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative h-32 overflow-hidden rounded-lg shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out transform
                  ${hoveredIndex === index ? 'animate-slide-down-up' : ''}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};