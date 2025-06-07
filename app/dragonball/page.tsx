




'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function DragonBall() {
  const router = useRouter();
    function playthis(link: string) {
    router.push(`dragonball/watch?video=${encodeURIComponent(link)}`);
    
    }

       return (
          <>
            <div>
              <div
                className="w-full h-[90vh] bg-cover bg-bottom"
                style={{
                  backgroundImage:
                    "url('https://wallpaperaccess.com/full/3811045.jpg')",
                }}
              >
                <div className="p-4 sm:p-10 text-white md:pr-220">
                  <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
                  Dragon Ball Z
                  </h3>
      
                  <div>
                    <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                      ★ ★ ★ ★ ★ | Average Rating 4.8 - 85.2 M Views
                    </h3>
                    <div>
      Dragon Ball Z is a legendary action-packed anime that continues the saga of Goku, a powerful Saiyan warrior who protects Earth from formidable enemies. Set years after the events of Dragon Ball, the story begins with the arrival of alien invaders revealing Goku’s true origins and thrusting him into battles that test the limits of strength, loyalty, and destiny.

As the series progresses, Goku trains harder and reaches new heights—achieving iconic forms like Super Saiyan—while facing off against unforgettable villains such as Frieza, Cell, and Majin Buu. Alongside him are beloved allies like Vegeta, Gohan, Piccolo, Trunks, and many more who each play vital roles in Earth’s defense.

With epic showdowns, high-stakes power struggles, and themes of perseverance, friendship, and self-discovery, Dragon Ball Z remains a timeless classic that shaped the landscape of shonen anime and continues to inspire generations worldwide.
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="px-4 sm:px-25 py-10 sm:py-20">
              <div className="pb-10 sm:pb-20">
                <h2 className="scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  Season 1
                </h2>
              </div>
              <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/UD2tOEg8Iio?si=jx4ms9T0AKCKhusm")}>Episode 1 - Watch Now </button>
                </h2>
              </div>
              <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/ELv6NBO75UM?si=LcR1ekDZsprrPbAU")}>Episode 2 - Watch Now</button>
                </h2>
              </div>
             <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/_STGwUJyqy8?si=qmsX3vBMvtUFDx3z")}>Episode 3 - Watch Now </button>
                </h2>
              </div>
              <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/AQSDfylqn4Q?si=cgLZV0M1iAAvup67")}>Episode 4 - Watch Now</button>
                </h2>
              </div>
              <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/UD2tOEg8Iio?si=jx4ms9T0AKCKhusm")}>Episode 5 - Watch Now </button>
                </h2>
              </div>
            
            </div>

            <div className="px-4 sm:px-25 py-10 sm:py-20">
              <div className="pb-10 sm:pb-20">
                <h2 className="scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  Season 2
                </h2>
              </div>
              <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/UD2tOEg8Iio?si=jx4ms9T0AKCKhusm")}>Episode 1 - Watch Now </button>
                </h2>
              </div>
              <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/ELv6NBO75UM?si=LcR1ekDZsprrPbAU")}>Episode 2 - Watch Now</button>
                </h2>
              </div>
             <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/_STGwUJyqy8?si=qmsX3vBMvtUFDx3z")}>Episode 3 - Watch Now </button>
                </h2>
              </div>
              <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/AQSDfylqn4Q?si=cgLZV0M1iAAvup67")}>Episode 4 - Watch Now</button>
                </h2>
              </div>
              <div className="sm:pr-80 py-5">
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                  <button onClick={() => playthis("https://www.youtube.com/embed/UD2tOEg8Iio?si=jx4ms9T0AKCKhusm")}>Episode 5 - Watch Now </button>
                </h2>
              </div>
            
              
             
            </div>
            
      
              
            
      
           <Footer/>
      
          
      </>
    )
  
  
}
