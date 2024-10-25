import React from "react";
import IconArrowRight from "../images/icon/iconArrowRight";
import Image from "../images/group.png";

function Header() {
  return (
    <div
      style={{
        background:
          "linear-gradient(270deg, rgba(62, 162, 244, 0) 13.07%, rgba(66, 62, 244, 0.1) 103.18%)",
        borderBottom: "1px solid #313856",
        backdropFilter: "blur(5.617943286895752px)",
      }}
      className="h-[280px] flex items-center pl-10 pr-12 justify-between mb-4"
    >
      <div className="w-[440px] flex flex-col gap-3">
        <h1 className="text-[24px] leading-7 font-bold">
          Unlock Rewards with the Copin Referral Program
        </h1>
        <p className="text-[13px] text-[#C0C0C9] leading-6">
          Earn rebates and commissions by inviting friends. Grow your network
          and benefit from our 6-tier reward system.
        </p>
        <div className="flex items-center gap-2 text-[#97CFFD] text-[13px] font-semibold	cursor-pointer">
          <p>View referral Ranking</p>
          <IconArrowRight />
        </div>
      </div>
      <div>
        <img alt="" src={Image} width={378} style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}

export default Header;
