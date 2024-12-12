export const Debit = () => {
  return (
    <div className="grid grid-cols-2 bg-Debit-bg text-white p-3 rounded-3xl mt-3 bg-cover bg-center bg-no-repeat bg-[url('bank.webp')]">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-2xl leading-6">
          Debit Card Under New <br /> Terms and Conditions
        </h3>
        <p className="bg-gray-700 w-fit p-2 rounded-xl">Fast Calculation</p>
        <p className="bg-gray-700 w-fit p-2 rounded-xl">Payments in 1 day</p>
        <p className="bg-gray-700 w-fit p-2 rounded-xl">24-hour support</p>
      </div>
      <div className="flex flex-col items-end justify-end">
        <button className="bg-gray-800 text-white py-2 px-5 rounded-2xl font-semibold">
          See more...
        </button>
      </div>
    </div>
  );
};
