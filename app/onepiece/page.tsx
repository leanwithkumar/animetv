'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';



export default function Onepiece() {

const router = useRouter();
function playthis(link: string) {
router.push(`onepiece/watch?video=${encodeURIComponent(link)}`);

}
  
  return (
     <>
       <div>
         <div
           className="w-full h-[90vh] bg-cover bg-bottom"
           style={{
             backgroundImage:
               "url('https://wallpapercave.com/wp/wp9070905.png')",
           }}
         >
           <div className="p-4 sm:p-10 text-white md:pr-220">
             <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
               One Piece
             </h3>
 
             <div>
               <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                 ★ ★ ★ ★ ★ | Average Rating 4.8 - 70.2 M Views
               </h3>
               <div className='' >
 One Piece is a legendary adventure anime that follows Monkey D. Luffy, a cheerful and fearless pirate with the power to stretch his body like rubber after eating a mystical Devil Fruit. Driven by his dream to become the Pirate King, Luffy sets out on a grand journey across the vast and dangerous seas to find the One Piece—the greatest treasure in the world, left behind by the former Pirate King, Gol D. Roger.

Along the way, Luffy forms an extraordinary crew known as the Straw Hat Pirates, each with unique abilities, dreams, and backstories—from the sword-wielding Zoro to the brilliant navigator Nami, the quirky inventor Usopp, the chivalrous cook Sanji, and many more.

Filled with epic battles, powerful friendships, ancient mysteries, and emotional moments, One Piece is a sprawling tale of freedom, courage, and chasing dreams no matter the odds. With its rich world-building and timeless messages, it remains one of the most beloved and influential anime series ever created.
 
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
             <button onClick={() => playthis("https://www.youtube.com/embed/L9tJjCCZ-z0?si=eKxNfBdj6f3Btm--")}>Episode 1 - Watch Now </button>
           </h2>
         </div>
         <div className="sm:pr-80 py-5">
           <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
             <button onClick={() => playthis("https://www.youtube.com/embed/UdOdjrzxzuk?si=dfQ2DVzdVKLTsgFQ")}>Episode 2 - Watch Now</button>
           </h2>
         </div>
        <div className="sm:pr-80 py-5">
           <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
             <button onClick={() => playthis("https://www.youtube.com/embed/B5N8u4PSk88?si=jmL4bKBiqJA10tCW")}>Episode 3 - Watch Now </button>
           </h2>
         </div>
         <div className="sm:pr-80 py-5">
           <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
             <button onClick={() => playthis("https://www.youtube.com/embed/N5aVVenZmhg?si=hsua5YTkXX6DO-36")}>Episode 4 - Watch Now</button>
           </h2>
         </div>
         <div className="sm:pr-80 py-5">
           <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
             <button onClick={() => playthis("https://www.youtube.com/embed/s8NrVU5G5ok?si=7lT2BvGgsC0OzKRO")}>Episode 5 - Watch Now </button>
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
             <button onClick={() => playthis("https://www.youtube.com/embed/L9tJjCCZ-z0?si=eKxNfBdj6f3Btm--")}>Episode 1 - Watch Now </button>
           </h2>
         </div>
         <div className="sm:pr-80 py-5">
           <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
             <button onClick={() => playthis("https://www.youtube.com/embed/UdOdjrzxzuk?si=dfQ2DVzdVKLTsgFQ")}>Episode 2 - Watch Now</button>
           </h2>
         </div>
        <div className="sm:pr-80 py-5">
           <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
             <button onClick={() => playthis("https://www.youtube.com/embed/B5N8u4PSk88?si=jmL4bKBiqJA10tCW")}>Episode 3 - Watch Now </button>
           </h2>
         </div>
         <div className="sm:pr-80 py-5">
           <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
             <button onClick={() => playthis("https://www.youtube.com/embed/N5aVVenZmhg?si=hsua5YTkXX6DO-36")}>Episode 4 - Watch Now</button>
           </h2>
         </div>
         <div className="sm:pr-80 py-5">
           <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
             <button onClick={() => playthis("https://www.youtube.com/embed/s8NrVU5G5ok?si=7lT2BvGgsC0OzKRO")}>Episode 5 - Watch Now </button>
           </h2>
         </div>
       
         
        
       </div>
       
 
         
       
 
      <Footer/>
 
     </>
  );
}
