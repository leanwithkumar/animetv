'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Onepunchman() {
  const router = useRouter();
    function playthis(link: string) {
    router.push(`onepunchman/watch?video=${encodeURIComponent(link)}`);
    
    }
  
  return (
      <>
        <div>
          <div
            className="w-full h-[90vh] bg-cover bg-bottom"
            style={{
              backgroundImage:
                "url('https://wallpaperaccess.com/full/3864797.jpg')",
            }}
          >
            <div className="p-4 sm:p-10 text-white md:pr-220">
              <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
                One Punch Man
              </h3>
  
              <div>
                <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                  ★ ★ ★ ★ ★ | Average Rating 4.5 - 35.1 M Views
                </h3>
                <div className='' >
  One Punch Man is a hilarious and action-packed superhero anime that follows Saitama, an unassuming bald man who can defeat any opponent with a single punch. Despite his overwhelming strength, Saitama struggles with a deep sense of boredom and a lack of purpose—no fight excites him anymore.

Living in a world filled with monsters, villains, and heroes ranked by the Hero Association, Saitama battles threats not for fame or fortune, but simply as a hobby. Alongside his loyal disciple Genos, a powerful cyborg hero, Saitama navigates the absurdities of hero society, gaining attention (and confusion) from those around him who fail to grasp the true extent of his power.

With its sharp humor, explosive animation, and satirical take on superhero tropes, One Punch Man delivers a refreshing and entertaining experience that questions what it truly means to be a hero.
  
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
              <button onClick={() => playthis("https://www.youtube.com/embed/J8aFk9PxClw?si=6v3t3m6PE5bVk5OT")}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/U6jTqQaP7NA?si=juyBEaPaMH7MBiY_")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
         <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/J8aFk9PxClw?si=6v3t3m6PE5bVk5OT")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/U6jTqQaP7NA?si=juyBEaPaMH7MBiY_")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/J8aFk9PxClw?si=6v3t3m6PE5bVk5OT")}>Episode 5 - Watch Now </button>
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
              <button onClick={() => playthis("https://www.youtube.com/embed/J8aFk9PxClw?si=6v3t3m6PE5bVk5OT")}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/U6jTqQaP7NA?si=juyBEaPaMH7MBiY_")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
         <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/J8aFk9PxClw?si=6v3t3m6PE5bVk5OT")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/U6jTqQaP7NA?si=juyBEaPaMH7MBiY_")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/J8aFk9PxClw?si=6v3t3m6PE5bVk5OT")}>Episode 5 - Watch Now </button>
            </h2>
          </div>
        
          
         
        </div>
       
          
        
  
       <Footer/>
  
      </>
    );
  }

