export const FirstSection = () => {
  return (
    <div className="flex flex-col gap-4 mb-2">
      <div className="bg-white rounded-sm p-2 flex flex-col gap-2 w-full">
        <div>
          <p className="font-semibold text-sm">Current balance</p>
          <p className="font-bold leading-6">$ 15,092.45</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 md:w-3/4 lg:w-full ">
          <img src="card1.webp" alt="card" className="w-fit cursor-pointer" />
          <img src="card2.jpg" alt="card" className="w-fit cursor-pointer" />
          <div className="flex flex-col items-center justify-center border-dotted border-2 border-gray-400 cursor-pointer">
            <p>+</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm p-2">
        <div>
          <p className="font-semibold text-sm">Real estate loan</p>
          <p className="font-bold mt-1">-$ 113,920.00</p>
        </div>
        <div className="lg:w-full">
          <p className="mt-4 font-semibold">20 payments left</p>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 mt-3 border-b-2 border-gray-300 py-2">
              <p className="bg-red-600 w-10 h-10 p-2 rounded-full flex flex-row items-center justify-center">
                6
              </p>
              <p className="text-sm">
                28 January <br />
                <span className="font-semibold">$1200.00</span>
              </p>
              <button className="bg-red-600 text-white p-1 rounded-3xl">
                Pay now
              </button>
            </div>
            <div className="grid grid-cols-3 justify-between border-b-2 border-gray-300 py-2">
              <p className=" w-10 h-10 p-2 flex flex-row items-center justify-center">
                7
              </p>
              <p className="text-sm">
                28 February <br />
                <span className="font-semibold">$1200.00</span>
              </p>
              {/* <div></div> */}
            </div>
            <div className="grid grid-cols-3 justify-between border-b-2 border-gray-300 py-2">
              <p className=" w-10 h-10 p-2 flex flex-row items-center justify-center">
                8
              </p>
              <p className="text-sm">
                28 March <br />
                <span className="font-semibold">$1200.00</span>
              </p>
              {/* <button>Pay now</button> */}
            </div>
          </div>
          <div className="w-full mt-3">
            <button className="mt-2 font-semibold underline">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
