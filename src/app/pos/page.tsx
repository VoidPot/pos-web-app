"use client";

import { CategoriesSlide } from "@/components/compositions/categories";

export default function POS() {
  return (
    <div className="min-h-fill w-full max-w-screen flex h-full md:flex-row flex-col">
      <div className="h-full md:w-12 bg-slate-100">Obe</div>
      <div className="h-full grow bg-slate-300">
        <div className="md:mx-16 mx-2 my-4">
          <CategoriesSlide />
        </div>
      </div>
      <div className="h-full bg-slate-200 w-1/4">Three</div>
    </div>
  );
}
