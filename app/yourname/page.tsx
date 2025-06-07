'use client'
import { useRouter } from 'next/navigation'
import Footer from '../footer/page';

export default function Yourname() {
  const router = useRouter();
  function playthis(link: string) {
    router.push(`yourname/watch?video=${encodeURIComponent(link)}`);
  }

  return (
    <>
      <div>
        <div
          className="w-full h-[90vh] bg-cover bg-bottom"
          style={{
            backgroundImage:
              "url('https://wallpaperaccess.com/full/8861100.jpg')",
          }}
        >
          <div className="p-4 sm:p-10 text-white">
            <h3 className="scroll-m-20 text-4xl sm:text-8xl font-semibold tracking-tight first:mt-0">
              Your Name
            </h3>

            <div>
              <h3 className="scroll-m-20 text-xl sm:text-4xl font-semibold tracking-tight py-5">
                ★ ★ ★ ★ ★ | Average Rating 4.1 - 55.2 M Views
              </h3>
              <div>
                Your Name is a breathtaking romantic fantasy anime film that follows two teenagers, Taki and<br /> Mitsuha, who mysteriously begin swapping bodies. As they navigate each other’s lives and form<br />a deep connection across time and space, they uncover a powerful bond that defies fate and<br /> reshapes their destinies.
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
            <button onClick={() => playthis("https://www.youtube.com/embed/nTbA7qrEsP0?si=2aELaDRYUxsJdA4_")}>Episode 1 - Watch Now </button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/zRWS6l9dA9g?si=heHviuqAlqRE6qYm")}>Episode 2 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/nTbA7qrEsP0?si=2aELaDRYUxsJdA4_")}>Episode 3 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/zRWS6l9dA9g?si=heHviuqAlqRE6qYm")}>Episode 4 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/nTbA7qrEsP0?si=2aELaDRYUxsJdA4_")}>Episode 5 - Watch Now</button>
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
            <button onClick={() => playthis("https://www.youtube.com/embed/nTbA7qrEsP0?si=2aELaDRYUxsJdA4_")}>Episode 1 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/zRWS6l9dA9g?si=heHviuqAlqRE6qYm")}>Episode 2 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/nTbA7qrEsP0?si=2aELaDRYUxsJdA4_")}>Episode 3 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/zRWS6l9dA9g?si=heHviuqAlqRE6qYm")}>Episode 4 - Watch Now</button>
          </h2>
        </div>
        <div className="sm:pr-80 py-5">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            <button onClick={() => playthis("https://www.youtube.com/embed/nTbA7qrEsP0?si=2aELaDRYUxsJdA4_")}>Episode 5 - Watch Now</button>
          </h2>
        </div>
      </div>

     <Footer/>

    </>
  );
}
