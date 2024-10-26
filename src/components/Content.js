import React from "react";
import BoxCommon from "./BoxCommon";
import IcLamp from "../images/icon/iconLamp";
import IconBoundingBox from "../images/icon/iconBoundingBox";
import IconUser from "../images/icon/iconUser";
import IconTreasureChest from "../images/icon/iconTreasureChest";
import IconMedalMilitary from "../images/icon/iconMedalMilitary";
import Cart from "./Cart";

const listCart = [
  {
    title: "1. Two-Level Referral System",
    description:
      "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)",
    icon: <IconBoundingBox />,
  },
  {
    title: "2. Earn Rebates & Commissions",
    description: "Earn rebates on your trades and commissions from F1 and F2.",
    icon: <IconUser />,
  },
  {
    title: "3. Claim Daily Rewards",
    description:
      "Rewards are credited after trades close and claimable daily at 0:00 UTC.",
    icon: <IconTreasureChest />,
  },
  {
    title: "4. Referral Tier System",
    description:
      "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days",
    icon: <IconMedalMilitary />,
  },
];

function Content() {
  return (
    <>
      <BoxCommon icon={<IcLamp />} title="How It Works?">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
          {listCart.map((val, index) => (
            <div className="min-h-[206px]" key={index}>
              <Cart item={val} />
            </div>
          ))}
        </div>
      </BoxCommon>
    </>
  );
}

export default Content;
