"use client";

import { useState } from "react";
import PromoSection from "./components/promo";
import CategorySection from "./components/kategori";

import Navbar from "./components/navbar";
import OrderSummary from "./components/order";
import PopularSection from "./components/populer";
import Order from "./components/order";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-row h-full">
        <div className="flex flex-col w-3/4 bg-white p-4 overflow-y-auto gap-4">
          <Navbar />
          <div className="m-9">
            <PromoSection />
          </div>
          
          <CategorySection />
          
          <PopularSection />
        </div>
        <div className="w-1/4 bg-gray-100 p-4 sticky top-0 h-screen">
          <Order/>
          <div className="flex flex-row justify-center mt-8">
          <Button/>
          </div>
        </div>
      </div>
    </div>
  );
}
