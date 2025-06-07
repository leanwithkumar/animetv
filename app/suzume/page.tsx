



'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Suzume() {
  const router = useRouter();
    function playthis(link: string) {
    router.push(`suzume/watch?video=${encodeURIComponent(link)}`);
    
    }
  
  return (
      <>
        <div>
          <div
            className="w-full h-[90vh] bg-cover bg-bottom"
            style={{
              backgroundImage:
                "url('https://images7.alphacoders.com/125/1258723.jpg')",
            }}
          >
            <div className="p-4 sm:p-10 text-white md:pr-220">
              <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
                Suzume
              </h3>
  
              <div>
                <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                  ★ ★ ★ ★ ★ | Average Rating 4.8 - 45.2 M Views
                </h3>
                <div className='' >
  Suzume is a visually stunning and emotionally resonant anime film directed by Makoto Shinkai, the acclaimed creator of Your Name and Weathering With You. The story follows Suzume Iwato, a high school girl living in a quiet town in Kyushu, whose life changes when she encounters a mysterious young man searching for a door.

Drawn by curiosity, Suzume discovers an old, weathered door standing upright in the ruins of a mountainside. When she opens it, she unknowingly releases a supernatural force that threatens to bring disaster across Japan. To stop the chaos, Suzume joins the young man in a journey across the country, closing similar doors and uncovering secrets that tie her to a painful past and a forgotten tragedy.

Suzume is a poignant coming-of-age tale blending fantasy, adventure, and heartfelt emotion. It explores themes of loss, healing, and human connection, all brought to life with breathtaking animation and a deeply moving soundtrack.
  
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
              <button onClick={() => playthis("https://www.youtube.com/embed/MLlGnQDrUfQ?si=d0LonE_3_LjGo-6f")}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/EB90M9d_-bk?si=jnnEcMEFmZPYJl5b")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/MLlGnQDrUfQ?si=d0LonE_3_LjGo-6f")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/EB90M9d_-bk?si=jnnEcMEFmZPYJl5b")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/MLlGnQDrUfQ?si=d0LonE_3_LjGo-6f")}>Episode 5 - Watch Now </button>
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
              <button onClick={() => playthis("https://www.youtube.com/embed/MLlGnQDrUfQ?si=d0LonE_3_LjGo-6f")}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/EB90M9d_-bk?si=jnnEcMEFmZPYJl5b")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/MLlGnQDrUfQ?si=d0LonE_3_LjGo-6f")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/EB90M9d_-bk?si=jnnEcMEFmZPYJl5b")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/MLlGnQDrUfQ?si=d0LonE_3_LjGo-6f")}>Episode 5 - Watch Now </button>
            </h2>
          </div>
         
         
        
          
         
        </div>
        
  
          
        
  
       <Footer/>
  
      </>
    );
  }

