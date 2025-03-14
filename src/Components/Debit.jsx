export const Debit = () => {
  return (
    <div className=" bg-Debit-bg text-white p-3 rounded-sm mt-3 bg-cover bg-center bg-no-repeat bg-[url('bank.webp')] md:w-3/4 lg:w-full">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-2xl leading-6">
          Debit Card Under New <br className="sm:hidden" /> Terms and Conditions
        </h3>
        <p className="bg-gray-700 w-fit p-2 rounded-xl">Fast Calculation</p>
        <p className="bg-gray-700 w-fit p-2 rounded-xl">Payments in 1 day</p>
        <div className="flex flex-row justify-between">
          <p className="bg-gray-700 w-fit p-2 rounded-xl">24-hour support</p>
          <button className="bg-gray-800 text-white py-2 px-5 rounded-2xl font-semibold">
            See more...
          </button>
        </div>
      </div>
    </div>
  );
};
