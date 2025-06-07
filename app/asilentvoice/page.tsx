'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Yourname() {
  const router = useRouter();
  function playthis(link: string) {
    router.push(`asilentvoice/watch?video=${encodeURIComponent(link)}`);
  }

  return (
    <>
      <div>
        <div
          className="w-full h-[90vh] bg-cover bg-bottom"
          style={{
            backgroundImage:
              "url('https://wallpapers.com/images/hd/a-silent-voice-minimalist-cast-i642ytix3rbr9fdz.jpg')",
          }}
        >
          <div className="p-4 sm:p-10 text-white md:pr-220">
            <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
              A Silent Voice
            </h3>

            <div>
              <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                ★ ★ ★ ★ ★ | Average Rating 4.2 - 35.2 M Views
              </h3>
              <div>
                A Silent Voice is a heartfelt and emotional anime film that explores themes of bullying, redemption, and forgiveness. The story follows Shoya Ishida, a boy who once bullied a deaf girl named Shoko Nishimiya in elementary school. Years later, burdened with guilt and social isolation, Shoya seeks to make amends with Shoko and find peace within himself. Their journey of healing and understanding reveals the profound impact of words, silence, and second chances.


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
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 1 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 2 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 3 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 4 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 5 - Watch Now</button>
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
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 1 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 2 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 3 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 4 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/2MCQRasYz0g?si=IluMIDBlKKJP81OX")}>Episode 5 - Watch Now</button>
          </h2>
        </div>
      </div>

      

     <Footer/>

    </>
  );
}

