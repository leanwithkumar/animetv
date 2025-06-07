'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Jujutsukisen() {
  const router = useRouter();
      function playthis(link: string) {
      router.push(`jujutsukisen/watch?video=${encodeURIComponent(link)}`);
      
      }
  
   return (
      <>
        <div>
          <div
            className="w-full h-[90vh] bg-cover bg-bottom"
            style={{
              backgroundImage:
                "url('https://wallpapercave.com/wp/wp9137387.jpg')",
            }}
          >
            <div className="p-4 sm:p-10 text-white md:pr-220">
              <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
                Attack On Titan
              </h3>
  
              <div>
                <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                  ★ ★ ★ ★ ★ | Average Rating 4.6 - 65.2 M Views
                </h3>
                <div>
                  Jujutsu Kaisen is a dark fantasy anime that dives into a world where cursed spirits—born from human negativity—wreak havoc on the living. The story follows Yuji Itadori, a high school student with extraordinary physical abilities who becomes the host of a powerful Curse named Ryomen Sukuna after a fateful encounter with a cursed object.

To protect others and understand his new reality, Yuji joins the Tokyo Jujutsu High School, where he trains under the guidance of powerful sorcerers like Satoru Gojo. Alongside his classmates Megumi Fushiguro and Nobara Kugisaki, he battles deadly curses while uncovering secrets about the sorcerer world and Sukuna’s terrifying power.

Combining intense action, deep emotion, and philosophical themes about life, death, and the value of the soul, Jujutsu Kaisen delivers breathtaking fight scenes, stylish animation, and a gripping narrative that explores the darkness lurking in humanity.
  
  
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
              <button onClick={() => playthis("https://www.youtube.com/embed/HzCeyfNjSbo?si=R463OeLMjfPBUU9z")}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/k18gSPjWDM0?si=4yJ7c7_mtW_kxjuY")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
         <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/CY5WLrSYPzo?si=4HwDurkycfsWeR6z")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/901o9QSXqAA?si=ZBnFdKYhhMSmXEP8")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/k18gSPjWDM0?si=4yJ7c7_mtW_kxjuY")}>Episode 5 - Watch Now </button>
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
              <button onClick={() => playthis("https://www.youtube.com/embed/HzCeyfNjSbo?si=R463OeLMjfPBUU9z")}>Episode 1 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/k18gSPjWDM0?si=4yJ7c7_mtW_kxjuY")}>Episode 2 - Watch Now</button>
            </h2>
          </div>
         <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/CY5WLrSYPzo?si=4HwDurkycfsWeR6z")}>Episode 3 - Watch Now </button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/901o9QSXqAA?si=ZBnFdKYhhMSmXEP8")}>Episode 4 - Watch Now</button>
            </h2>
          </div>
          <div className="sm:pr-80 py-5">
            <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
              <button onClick={() => playthis("https://www.youtube.com/embed/k18gSPjWDM0?si=4yJ7c7_mtW_kxjuY")}>Episode 5 - Watch Now </button>
            </h2>
          </div>
        
          
         
        </div>
        
  
          
        
  
       <Footer/>
       
  
      </>
   )
}
