'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Attackontitan() {
  const router = useRouter();
  function playthis(link: string) {
    router.push(`attackontitan/watch?video=${encodeURIComponent(link)}`);
  }

  return (
    <>
      <div>
        <div
          className="w-full h-[90vh] bg-cover bg-bottom"
          style={{
            backgroundImage:
              "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c58f25d-bb13-4fe6-bbfa-4f146ec3785a/de8pzxe-5b626dfd-bef1-496a-8cb6-7653f0c5c679.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjNThmMjVkLWJiMTMtNGZlNi1iYmZhLTRmMTQ2ZWMzNzg1YVwvZGU4cHp4ZS01YjYyNmRmZC1iZWYxLTQ5NmEtOGNiNi03NjUzZjBjNWM2NzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JiO0NbBj1DNSz2NPCRegAxj_jVqDkKb18GocybwP_PI')",
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
              <div className='' >
Attack on Titan is an intense and emotionally charged dark fantasy anime set in a dystopian world where humanity is on the verge of extinction due to giant humanoid creatures known as Titans. The remnants of civilization live behind massive walls built to protect them from these terrifying beings. The story centers around Eren Yeager, a passionate and determined young man who, after witnessing the destruction of his hometown and the loss of his mother, vows to annihilate every last Titan.

As the series unfolds, Eren and his friends—Mikasa and Armin—join the military to fight for humanity’s survival, only to uncover horrifying truths about the Titans, the government, and the real history of their world. With stunning animation, unpredictable plot twists, and deep moral questions, Attack on Titan explores themes of freedom, sacrifice, and the true cost of war.

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
            <button onClick={() => playthis("https://www.youtube.com/embed/fdSw6XEcg8I?si=DgV_6aj9UZ0tXnTm")}>Episode 1 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/BDzzOX1NExM?si=JOVjhhRX2Lvzhrem")}>Episode 2 - Watch Now</button>
          </h2>
        </div>
       <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/fdSw6XEcg8I?si=DgV_6aj9UZ0tXnTm")}>Episode 3 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/BDzzOX1NExM?si=JOVjhhRX2Lvzhrem")}>Episode 4 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/fdSw6XEcg8I?si=DgV_6aj9UZ0tXnTm")}>Episode 5 - Watch Now </button>
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
            <button onClick={() => playthis("https://www.youtube.com/embed/fdSw6XEcg8I?si=DgV_6aj9UZ0tXnTm")}>Episode 1 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/BDzzOX1NExM?si=JOVjhhRX2Lvzhrem")}>Episode 2 - Watch Now</button>
          </h2>
        </div>
       <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/fdSw6XEcg8I?si=DgV_6aj9UZ0tXnTm")}>Episode 3 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/BDzzOX1NExM?si=JOVjhhRX2Lvzhrem")}>Episode 4 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/fdSw6XEcg8I?si=DgV_6aj9UZ0tXnTm")}>Episode 5 - Watch Now </button>
          </h2>
        </div>
      
        
       
      </div>

        
      

     <Footer/>

    </>
  );
}


