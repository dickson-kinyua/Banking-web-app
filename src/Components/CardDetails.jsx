import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faArrowRight,
  faCreditCard,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
export const CardDetails = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4   mt-4 ">
      <div className="flex flex-col gap-4 bg-white p-2 rounded-2xl">
        <div className="flex flex-col items-start">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
        <div className="flex flex-row justify-between">
          <p>By details</p>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-white p-2 rounded-2xl">
        <div className="flex flex-col items-start">
          <FontAwesomeIcon icon={faCreditCard} />
        </div>
        <div className="flex flex-row justify-between">
          <p>Card number</p>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-white p-2 rounded-2xl">
        <div className="flex flex-col items-start">
          <FontAwesomeIcon icon={faQrcode} />
        </div>
        <div className="flex flex-row justify-between">
          <p>QR Scanner</p>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
    </div>
  );
};
