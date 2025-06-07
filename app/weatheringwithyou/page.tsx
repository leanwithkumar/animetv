'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Weatheringwithyou() {
  const router = useRouter();
  function playthis(link: string) {
    router.push(`weatheringwithyou/watch?video=${encodeURIComponent(link)}`);
  }
  return (
      <>
        <div>
          <div
            className="w-full h-[90vh] bg-cover bg-bottom"
            style={{
              backgroundImage:
                "url('https://images2.alphacoders.com/105/thumb-1920-1052807.png')",
            }}
          >
            <div className="p-4 sm:p-10 text-white md:pr-220">
              <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
                Weathering With You
              </h3>
  
              <div>
                <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                  ★ ★ ★ ★ ★ | Average Rating 4.4 - 35.8 M Views
                </h3>
                <div >
  Weathering With You is a beautifully crafted romantic fantasy anime film directed by Makoto Shinkai, the visionary behind Your Name. Set in a rain-soaked Tokyo, the story follows Hodaka Morishima, a runaway high school student who moves to the city seeking a new life. Struggling to find his place, he eventually meets Hina Amano, a kind and mysterious girl with a miraculous ability — she can stop the rain and bring sunshine with her prayers.

As they form a close bond, Hodaka and Hina start a small business offering “sunshine” to people during Japan’s relentless downpours. But their happiness is threatened as they discover that Hina’s powers come at a great cost, tied to an ancient weather myth. Faced with impossible choices, they must decide between saving the world and holding onto the one thing they love most.

Weathering With You blends emotional storytelling, environmental themes, and awe-inspiring animation. It’s a touching tale about love, sacrifice, and the power of human connection in the face of uncontrollable natural forces.
  
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
              <button onClick={() => playthis("https://www.youtube.com/embed/MIDFYzHx9DU?si=oroGJ_7DNOqxP6PR")}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/kcgrh_B7NvA?si=FN2t5UrqaecE19v2")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/MIDFYzHx9DU?si=oroGJ_7DNOqxP6PR")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/kcgrh_B7NvA?si=FN2t5UrqaecE19v2")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/MIDFYzHx9DU?si=oroGJ_7DNOqxP6PR")}>Episode 5 - Watch Now </button>
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
              <button onClick={() => playthis("https://www.youtube.com/embed/MIDFYzHx9DU?si=oroGJ_7DNOqxP6PR")}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/kcgrh_B7NvA?si=FN2t5UrqaecE19v2")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/MIDFYzHx9DU?si=oroGJ_7DNOqxP6PR")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/kcgrh_B7NvA?si=FN2t5UrqaecE19v2")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/MIDFYzHx9DU?si=oroGJ_7DNOqxP6PR")}>Episode 5 - Watch Now </button>
            </h2>
          </div>
       
        </div>
  
          
        
  
       <Footer/>
  
      </>
    );
  }

