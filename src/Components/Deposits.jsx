export const Deposits = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-2 rounded-sm">
      <div className="flex flex-row justify-between">
        <p className="font-semibold">Deposit for 8 Month</p>
        <p className="text-sm">Dec 11,2024</p>
      </div>
      <div className="font-semibold flex flex-row justify-between">
        <p>$ 1318.73</p>
        <p>9%</p>
      </div>
      <div className="font-semibold flex flex-row justify-between">
        <p>$ 1437.30</p>
        <p className="font-normal text-sm">Feb 15,29 days later</p>
      </div>
    </div>
  );
};
