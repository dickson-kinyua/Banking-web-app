export const FirstSection = () => {
  return (
    <div className="flex flex-col gap-4 mb-2">
      <div className="bg-white rounded-2xl p-4 flex flex-col gap-2">
        <div>
          <p className="font-semibold text-sm">Current balance</p>
          <p className="font-bold leading-6">$ 15,092.45</p>
        </div>
        <div className="grid grid-cols-3 w-full">
          <img src="card1.webp" alt="card" className="w-fit cursor-pointer" />
          <img src="card2.jpg" alt="card" className="w-fit cursor-pointer" />
          <div className="flex flex-col items-center justify-center border-dotted border-2 border-gray-400 cursor-pointer">
            <p>+</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-2">
        <div>
          <p className="font-semibold text-sm">Real estate loan</p>
          <p className="font-bold text-xl md:text-2xl mt-1">-$ 113,920.00</p>
        </div>
        <div>
          <p className="mt-4 font-semibold text-sm">20 payments left</p>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 mt-3">
              <p className="bg-custom-yellow w-10 h-10 p-2 rounded-full flex flex-row items-center justify-center">
                6
              </p>
              <p className="text-sm">
                28 January <br />
                <span className="font-semibold">$1200.00</span>
              </p>
              <button className="bg-black text-white px-1 py-1 rounded-3xl">
                Pay now
              </button>
            </div>
            <div className="grid grid-cols-3 justify-between">
              <p className=" w-10 h-10 p-2 flex flex-row items-center justify-center">
                7
              </p>
              <p className="text-sm">
                28 February <br />
                <span className="font-semibold">$1200.00</span>
              </p>
              {/* <div></div> */}
            </div>
            <div className="grid grid-cols-3 justify-between">
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
            <button className="w-full bg-custom-yellow p-2 rounded-3xl mt-2 font-semibold">
              See more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-2 flex flex-col gap-2">
        <p className="font-semibold">Brokerage account</p>
        <p className="font-bold">$0.00</p>
        <button className="w-full bg-custom-yellow p-2 rounded-3xl font-semibold mt-3">
          Open now
        </button>
      </div>
    </div>
  );
};
