import React from "react";
import ModernUi from "../assets/ModernUI.png";
import Any from "../assets/anydesign.png";
import Payment from "../assets/paymentGateways.png";
import Interactive from "../assets/InteractiveUI.png";
import Complex from "../assets/handleComplexApp.png";
import Covered from "../assets/covered.png";

function DemoWall() {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <img
            src={ModernUi}
            alt="Modern UI"
            className="h-65 w-50 border-2 border-orange-400" // Adjusts size with Tailwind CSS
          />
          <p className="mt-2">Modern UI</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Any}
            alt="Modern UI"
            className="h-65 w-50 border-2 border-orange-400" // Adjusts size with Tailwind CSS
          />
          <p className="mt-2">Any Design</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Payment}
            alt="Modern UI"
            className="h-65 w-50 border-2 border-orange-400" // Adjusts size with Tailwind CSS
          />
          <p className="mt-2">Payment Gateways</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Interactive}
            alt="Modern UI"
            className="h-65 w-50 border-2 border-orange-400" // Adjusts size with Tailwind CSS
          />
          <p className="mt-2">Interactive UI</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Complex}
            alt="Modern UI"
            className="h-65 w-50 border-2 border-orange-400" // Adjusts size with Tailwind CSS
          />
          <p className="mt-2">Complex Apps</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Covered}
            alt="Modern UI"
            className="h-65 w-50 border-2 border-orange-400" // Adjusts size with Tailwind CSS
          />
          <p className="mt-2">Covering Aspects</p>
        </div>
      </div>
    </div>
  );
}

export default DemoWall;
