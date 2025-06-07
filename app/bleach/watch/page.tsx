'use client'

import { Suspense } from "react"
import Bleachwatch from "./watch"


export default function Watch() {
return(
  <>
  <Suspense fallback={<div className="text-white text-lg p-10">Loading video...</div>}>
       <Bleachwatch/>
  </Suspense>
  </>
)
  
}