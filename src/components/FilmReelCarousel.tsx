import { ImageWithFallback } from './figma/ImageWithFallback';

const images = [
  '/imgs/yy-crafting.jpg',
  '/imgs/student-govt.png',
  '/imgs/skillseed.PNG',
  '/imgs/lionjam-org.png',
  '/imgs/ssa-booth.JPG',
  '/imgs/women-in-gaming-speaker.png'
];

export function FilmReelCarousel() {
  const extendedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden cursor-pointer">
      <div className="flex animate-scroll-left gap-6">
        {extendedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0">
              <ImageWithFallback
                src={src}
                alt={`Photo ${(index % images.length) + 1}`}
                className="w-40 h-32 object-cover"
              />
          </div>
        ))}
      </div>
    </div>
  );
}