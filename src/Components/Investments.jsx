import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faApple, faAmazon } from "@fortawesome/free-solid-svg-icons";

export const Investments = () => {
  return (
    <div className="bg-white flex flex-col gap-3 p-3 rounded-sm">
      <div className="flex flex-row justify-between">
        <p className="font-bold">My Investments </p>
        <Link to={"#"} className="font-semibold underline">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div>
            {/* <FontAwesomeIcon icon={faApple} /> */}
            <p className="font-semibold">Apple Inc.</p>
          </div>
          <p className="text-green-950">+0.33%</p>
        </div>

        <div className="flex flex-row justify-between">
          <div>
            <p className="font-semibold">Alcoa Corporation</p>
          </div>
          <p className="text-red-800">-0.29%</p>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-semibold">Netflix</p>
          </div>
          <p className="text-green-900">+24.13%</p>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-semibold">Airbnb</p>
          </div>
          <p className="text-green-900">+24.13%</p>
        </div>
      </div>
    </div>
  );
};
