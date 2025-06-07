
'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Naruto() {
  const router = useRouter();
    function playthis(link: string) {
    router.push(`naruto/watch?video=${encodeURIComponent(link)}`);
    
    }
  
   return (
      <>
        <div>
          <div
            className="w-full h-[90vh] bg-cover bg-bottom"
            style={{
              backgroundImage:
                "url('https://wallpapercave.com/wp/wp10845035.jpg')",
            }}
          >
            <div className="p-4 sm:p-10 text-white md:pr-220">
              <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
                Naruto 
              </h3>
  
              <div>
                <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                  ★ ★ ★ ★ ★ | Average Rating 4.8 - 75.2 M Views
                </h3>
                <div>
Naruto is an epic coming-of-age anime that follows Naruto Uzumaki, a spirited young ninja with a dream of becoming the strongest leader of his village—the Hokage. Born with the powerful Nine-Tailed Fox Demon (Kurama) sealed inside him, Naruto is initially shunned by his peers but uses his determination, optimism, and relentless will to earn their respect.

As he trains and grows, Naruto forms close bonds with his teammates Sasuke Uchiha and Sakura Haruno, under the mentorship of the wise and skilled Kakashi Hatake. The series explores themes of friendship, perseverance, and self-discovery, all while delving into intense ninja battles, hidden conspiracies, and the complexities of revenge, sacrifice, and destiny.

Spanning emotional story arcs and unforgettable characters, Naruto is a legendary tale of growth and legacy that has inspired generations of anime fans around the world.
  
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
              <button onClick={() => playthis('https://www.youtube.com/embed/g0kFdsn2RUs?si=krbSZ18WB7zW9NJG')}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/57zHwflD7co?si=EHdxKN6zAi_8edrY")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
         <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/g0kFdsn2RUs?si=krbSZ18WB7zW9NJG")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/57zHwflD7co?si=EHdxKN6zAi_8edrY")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/flxZd7EFhSo?si=bAa0etTUVZSmNhxb")}>Episode 5 - Watch Now </button>
            </h2>
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
              <button onClick={() => playthis('https://www.youtube.com/embed/g0kFdsn2RUs?si=krbSZ18WB7zW9NJG')}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/57zHwflD7co?si=EHdxKN6zAi_8edrY")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
         <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/g0kFdsn2RUs?si=krbSZ18WB7zW9NJG")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/57zHwflD7co?si=EHdxKN6zAi_8edrY")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/flxZd7EFhSo?si=bAa0etTUVZSmNhxb")}>Episode 5 - Watch Now </button>
            </h2>
          </div>
        
          
         
        </div>
        
  
          
        
  
       <Footer/>
  
      </>
   )
}
