export default function Order() {
  return (
    <div className="flex flex-col gap-12 m-1">
      <div className="flex flex-row gap-7 justify-end">
        <img src="/assets/kubus.png" alt="" className="w-7 h-7" />
        <img src="/assets/lope.png" alt="" className="w-7 h-7" />
        <img src="/assets/3.png" alt="" className="w-7 h-7" />
        <img src="/assets/profile.png" alt="" className="w-7 h-7" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold mb-3 text-black">Pesanan Saya</h2>
        <div className="flex flex-col gap-5 bg-[#6455C2] rounded-3xl p-4 pl-6">
          <p className="text-white font-thin">Mr. Rizqi</p>
          <p className="text-white font-semibold text-2xl">Rp. 1.000.000,-</p>
          <p className="text-white font-thin">
            3 7 5 8 * * * * * * * * * * 8 9 1 3
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg">🚗</div>
        <div className="font-bold text-black text-lg">jl. Bangke no 13 . . .</div>
        <div className="font-thin text-gray-400 text-sm">Gratis</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="font-normal text-black text-lg">Total:</div>
        <div className="font-medium text-black text-2xl">Rp 1.000.000</div>
      </div>
    </div>
  );
}