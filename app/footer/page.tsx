export default function Footer(){
    return(
        <>
<footer className="w-full px-4 py-6 text-black">
  <div className="flex flex-col sm:flex-row justify-between items-center font-semibold text-m sm:text-base md:px-35">
    <div className="mb-2 sm:mb-0">
      © 2025 | made with 💖 by leanwithkumar
    </div>
    <div className="flex space-x-4">
      <a href="https://github.com/leanwithkumar" className="hover:underline">github</a>
      <a href="https://x.com/leanwithkumar" className="hover:underline">twitter</a>
      <a href="https://www.instagram.com/leanwithkumar/" className="hover:underline">insta</a>
    </div>
  </div>
</footer>
        </>
    )
}