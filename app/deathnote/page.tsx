'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Deathnote() {
  const router = useRouter();
  function playthis(link: string) {
    router.push(`deathnote/watch?video=${encodeURIComponent(link)}`);
  }

  return (
    <>
      <div>
        <div
          className="w-full h-[90vh] bg-cover bg-bottom"
          style={{
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp8539161.jpg')",
          }}
        >
          <div className="p-4 sm:p-10 text-white md:pr-220">
            <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
              Deathnote
            </h3>

            <div>
              <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                ★ ★ ★ ★ ★ | Average Rating 4.9 - 85.2 M Views
              </h3>
              <div>
                Death Note is a psychological thriller anime that explores the dangerous consequences of absolute power. The story follows Light Yagami, a brilliant high school student who stumbles upon a mysterious notebook called the Death Note. This supernatural book grants its user the ability to kill anyone simply by writing their name in it, as long as the user knows the target’s face.

Guided by a god of death named Ryuk, Light sets out to cleanse the world of criminals and create a new world order where he reigns as a god. However, his actions attract the attention of L, a legendary and enigmatic detective who is determined to uncover Kira’s true identity and stop the killings.

What unfolds is a tense cat-and-mouse game filled with deception, strategy, and moral ambiguity. As Light and L engage in a high-stakes battle of wits, the line between justice and evil becomes increasingly blurred.

With its gripping narrative, sharp dialogue, and intense psychological conflicts, Death Note remains one of the most iconic and thought-provoking anime series of all time.

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
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 1 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 2 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 3 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 4 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 5 - Watch Now </button>
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
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 1 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 2 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 3 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 4 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/kNyR46eHDxE?si=x69_Uoidjgknrz9M")}>Episode 5 - Watch Now </button>
          </h2>
        </div>
       
        
       
      </div>
   

        
      

     <Footer/>

    </>
  );
}



