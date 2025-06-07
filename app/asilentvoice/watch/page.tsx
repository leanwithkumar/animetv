'use client'
import { Suspense } from 'react';
import Asilentvoicewatch from './watchthis';

export default function Page() {
  return (
    <>
    
    <Suspense fallback={<div className="text-white text-lg p-10">Loading video...</div>}>
      <Asilentvoicewatch/>
    </Suspense>
    </>
  );
}
