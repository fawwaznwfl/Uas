//popular

"use client";

import { useState } from "react";

type Item = {
  name: string;
  price: number;
  img: string;
};

export default function PopularSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setQuantity(1);
  };

  return (
    <section>
      <h3 className="text-lg font-bold mb-4 text-black">Populer</h3>
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 gap-3 flex flex-col shadow-lg cursor-pointer"
            onClick={() =>
              handleItemClick({
                name: "Pizza Cheese",
                price: 35000,
                img: "/assets/pizza_chese.png",
              })
            }
          >
            <img
              src="/assets/pizza_chese.png"
              alt="Pizza Cheese"
              className="rounded-lg"
            />
            <p className="font-bold text-black text-lg">Pizza Cheese</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500 text-sm">⭐ 4.8</p>
              <p className="text-black font-bold">Rp 35,000</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 gap-3 flex flex-col shadow-lg cursor-pointer"
            onClick={() =>
              handleItemClick({
                name: "Jus Buah",
                price: 5000,
                img: "/assets/jus.jpeg",
              })
            }
          >
            <img
              src="/assets/jus.jpeg"
              alt="Jus"
              className="rounded-lg"
            />
            <p className="font-bold text-black text-lg">Jus Buah</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500 text-sm">⭐ 4.4</p>
              <p className="text-black font-bold">Rp 5,000</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 gap-3 flex flex-col shadow-lg cursor-pointer"
            onClick={() =>
              handleItemClick({
                name: "burger",
                price: 40000,
                img: "/assets/burger.png",
              })
            }
          >
            <img
              src="/assets/burger.png"
              alt="Burger"
              className="rounded-lg"
            />
            <p className="font-bold text-black text-lg">Burger</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500 text-sm">⭐ 4.3</p>
              <p className="text-black font-bold">Rp 40,000</p>
            </div>
          </div>
        ))}
      </div>


      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <img
              src={selectedItem.img}
              alt={selectedItem.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-black mb-2">
              {selectedItem.name}
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Rp {selectedItem.price.toLocaleString()}
            </p>
            <div className="flex items-center justify-center mb-4 gap-10">
              <button
                className="bg-gray-200 text-black px-3 py-1 rounded-full"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <p className="text-black font-bold text-lg">{quantity}</p>
              <button
                className="bg-gray-200 text-black px-3 py-1 rounded-full"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
              <button
              className="bg-purple-700 text-white w-full py-2 rounded-lg font-bold"
              onClick={handleCloseModal} 
            >
              Tambah Pesanan
            </button>
            </div>
            <button
              className="mt-4 w-full text-gray-500"
              onClick={handleCloseModal}
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </section>
  );
}