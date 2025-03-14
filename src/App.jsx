import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import "../public/style.css";
import { Header } from "./Components/Header";
import { FirstSection } from "./Components/FirstSection";
import { Search } from "./Components/Search";
import { Debit } from "./Components/Debit";
import { CardDetails } from "./Components/CardDetails";
import { Investments } from "./Components/Investments";
import { Deposits } from "./Components/Deposits";
import { Exchange } from "./Components/Exchange";

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-3  lg:h-svh bg-custom-bg p-2 text-[14px]  ">
        <div className="sticky top-0 bg-slate-50  lg:w-full">
          <Header />
        </div>
        <div className="flex flex-col lg:w-full gap-5 lg:flex-row">
          <div className="w-full lg:w-1/4">
            <FirstSection />
          </div>
          <div className="w-full lg:w-1/2 ">
            <Search />
            <Debit />
            <CardDetails />
          </div>
          <div className="w-full lg:w-1/4 flex flex-col gap-5">
            <Investments />
            <Deposits />
            <Exchange />
            {/* <Copyright /> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
