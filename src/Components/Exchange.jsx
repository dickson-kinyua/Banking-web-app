export const Exchange = () => {
  return (
    <div className="flex flex-col gap-2 bg-white p-2 rounded-2xl mb-2">
      <div>
        <p className="font-semibold">Convert currency</p>
      </div>
      <div>
        <p>Exchange from</p>
        <div>
          <p className="font-semibold text-xl">$ 3,215.00</p>
        </div>
      </div>
      <div>
        <p>To</p>
        <div>
          <p className="font-semibold text-xl">£ 2,528.71</p>
        </div>
      </div>
    </div>
  );
};
