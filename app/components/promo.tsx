export default function PromoSection() {
  return (
    <section className="bg-orange-100 p-6 pl-16 rounded-3xl  mb-6 flex flex-row gap-8 items-center">
      <div>
        <img src="/assets/promo.png" alt=""  className=" w-52 h-28"/>
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold text-orange-600">
          Promo Hari Ini
        </h2>
        <p className="text-orange-600 text-2xl">Perut kenyang, hati senang!</p>
      </div>
    </section>
  );
}
