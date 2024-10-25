import React from "react";

function Footer() {
  return (
    <div className="bg-[#101423] h-[100%] flex flex-col justify-center items-center">
      <h2 className="text-center font-bold leading-6 mb-1">
        Apply&nbsp;
        <span
          style={{
            background:
              "linear-gradient(90deg, #ABECA2 -1.42%, #2FB3FE 30.38%, #6A8EEA 65.09%, #A185F4 99.55%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Copin Affilate Program
        </span>
        &nbsp;to get
        <br /> more benefits!
      </h2>
      <h4 className="text-[#4EAEFD] font-semibold text-[13px] cursor-pointer leading-6">
        Contact us
      </h4>
    </div>
  );
}

export default Footer;
