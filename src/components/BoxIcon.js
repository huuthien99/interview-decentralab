import React from "react";

function BoxIcon(props) {
  const { icon } = props;
  return (
    <div
      style={{
        background:
          "conic-gradient(from 124.76deg at 49.86% 36.95%, #A185F4 -5.64deg, #ABECA2 0.06deg, #2FB3FE 111.61deg, #6A8EEA 233.41deg, #A185F4 354.35deg, #ABECA2 360.06deg)",
      }}
      className="size-[46px] rounded-sm border-[0.54px] border-[#FFFFFF33]  backdrop-blur-[10px]"
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0.01%, rgba(4, 9, 20, 0.2) 31.13%, rgba(255, 255, 255, 0.2) 110.67%)",
          backgroundBlendMode: "overlay",
        }}
        className="size-[46px] flex justify-center items-center"
      >
        {icon}
      </div>
    </div>
  );
}

export default BoxIcon;
