import { ImageWithFallback } from './figma/ImageWithFallback';

const images = [
  'public/imgs/yy-crafting.jpg',
  'public/imgs/student-govt.png',
  'public/imgs/skillseed.PNG',
  'public/imgs/lionjam-org.png',
  'public/imgs/ssa-booth.JPG',
  'public/imgs/women-in-gaming-speaker.png'
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