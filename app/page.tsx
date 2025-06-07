"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link  from "next/link";

export default function Home() {
  return (
    <>
    <div className="relative md:h-[200vh]">
     
      <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/videoplayback1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full" />
      </div>

    
      <div className="pt-[100vh]">
        <div className="text-5xl text-white px-6 py-4 text-center">Most Trending Anime</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 px-6 py-5">
          
          <div className="h-[40rem]  relative flex items-center justify-center">
            <Link href="/dragonball">
              <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/d0/28/b2/d028b289da395a248e46d71c65ca1dcb.jpg">
              <p className="font-bold text-xl">Dragon Ball</p>
              
              <p className="font-normal text-sm cursor-pointer underline hover:text-blue-400 transition">
              Stream Now
              </p>
              
           </DirectionAwareHover>
           </Link>
          </div>

          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/naruto"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/a8/4e/79/a84e79ad5d11991ee4a827ebd3284d70.jpg">
              <p className="font-bold text-xl">Naruto</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>

          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/onepiece"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/35/42/4a/35424a76d4df6d1f1381e75339ea30c1.jpg">
              <p className="font-bold text-xl">One Piece</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>

          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/attackontitan"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg">
              <p className="font-bold text-xl">Attack on Titan</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>

          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/bleach"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/3e/e0/29/3ee0299589bf61871e2f838a48f4b965.jpg">
              <p className="font-bold text-xl">Bleach</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>

          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/hunterxhunter"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/f2/e4/b8/f2e4b8b7eb8ca18a025c735dd81f9c79.jpg">
              <p className="font-bold text-xl">Hunter x Hunter</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>

          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/blackclover"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/e9/3c/d2/e93cd2c6b82ecc80f33c46a5fe7fa98f.jpg">
              <p className="font-bold text-xl">Black Clover</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>

          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/demonslayer"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/a3/05/3c/a3053ce61d5c047e59d8986b98856a73.jpg">
              <p className="font-bold text-xl">Demon Slayer</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>
          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/onepunchman"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/3c/23/4e/3c234e4e369df039769ab414c1500bdf.jpg">
              <p className="font-bold text-xl">One Punch Man</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>
          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/jujutsukisen"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/56/e3/bd/56e3bd29c2ca846af718fbd512512ead.jpg">
              <p className="font-bold text-xl">Jujutsu Kisen</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>
          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/deathnote"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/40/27/95/402795450cf62e52e64b5a9c548556f2.jpg">
              <p className="font-bold text-xl">Deathnote</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>
          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/fullmetalalchemist"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/5b/91/05/5b9105b29936fbcb8e3fd53271ded85d.jpg">
              <p className="font-bold text-xl">Fullmetal Alchemist</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>
          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/weatheringwithyou"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/de/4e/01/de4e0140ecdce63e20abb54720d397e4.jpg">
              <p className="font-bold text-xl">Weathering With You</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>

          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/suzume"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/a3/b4/09/a3b409ca3077e00188cff779cf425dcb.jpg">
              <p className="font-bold text-xl">Suzume</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>
          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/asilentvoice"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/83/5c/d4/835cd4892e3741678f0fb99c0bdee8f5.jpg">
              <p className="font-bold text-xl">A Silent Voice</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>
          
          <div className="h-[40rem] relative flex items-center justify-center">
            <Link href={"/yourname"}>
            <DirectionAwareHover imageUrl="https://i.pinimg.com/736x/09/0c/3f/090c3fb9097f799e629351a6d26f5888.jpg">
              <p className="font-bold text-xl">Your Name</p>
              <p className="font-normal text-sm">Stream Now</p>
            </DirectionAwareHover>
            </Link>
          </div>
          

        </div>
      </div>
  <footer className="w-full px-4 py-6 text-white">
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
</div>
       
    </>
    
  );
}
