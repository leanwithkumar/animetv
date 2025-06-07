'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Blackclover() {
  const router = useRouter();
  function playthis(link: string) {
    router.push(`blackclover/watch?video=${encodeURIComponent(link)}`);
  }

  return (
    <>
      <div>
        <div
          className="w-full h-[90vh] bg-cover bg-bottom"
          style={{
            backgroundImage:
              "url('https://images2.alphacoders.com/121/1215275.png')",
          }}
        >
          <div className="p-4 sm:p-10 text-white md:pr-220">
            <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
              Black Clover
            </h3>

            <div>
              <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                ★ ★ ★ ★ ★ | Average Rating 4.6 - 48.2 M Views
              </h3>
              <div>
                Black Clover is a high-energy fantasy anime that follows the journey of Asta, a loud and determined boy born without any magical power in a world where magic is everything. Despite this limitation, Asta dreams of becoming the Wizard King — the strongest mage in the Clover Kingdom. With sheer determination, intense physical training, and an anti-magic sword that can nullify spells, Asta sets out to prove that strength isnt only defined by magic.

Alongside his childhood rival and foster brother Yuno — a naturally gifted mage with immense magical talent — Asta joins the quirky and powerful Black Bulls squad. Together, they face dangerous missions, uncover dark secrets, and battle powerful foes threatening the kingdom.

With fast-paced action, evolving characters, and themes of perseverance, rivalry, and friendship, Black Clover is a story about defying the odds and forging your own path to greatness.
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
            <button onClick={() => playthis("https://www.youtube.com/embed/XMeQeIG_rQg?si=nXVUeXOqB_jlum2g")}>Episode 1 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/_1-els1iSwI?si=2qy3OSW0sniA3B4-")}>Episode 2 - Watch Now</button>
          </h2>
        </div>
       <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/XMeQeIG_rQg?si=nXVUeXOqB_jlum2g")}>Episode 3 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/_1-els1iSwI?si=2qy3OSW0sniA3B4-")}>Episode 4 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/XMeQeIG_rQg?si=nXVUeXOqB_jlum2g")}>Episode 5 - Watch Now </button>
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
            <button onClick={() => playthis("https://www.youtube.com/embed/XMeQeIG_rQg?si=nXVUeXOqB_jlum2g")}>Episode 1 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/_1-els1iSwI?si=2qy3OSW0sniA3B4-")}>Episode 2 - Watch Now</button>
          </h2>
        </div>
       <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/XMeQeIG_rQg?si=nXVUeXOqB_jlum2g")}>Episode 3 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/_1-els1iSwI?si=2qy3OSW0sniA3B4-")}>Episode 4 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/XMeQeIG_rQg?si=nXVUeXOqB_jlum2g")}>Episode 5 - Watch Now </button>
          </h2>
        </div>
       
      </div>
     

        
      

     <Footer/>

    </>
  );
}


