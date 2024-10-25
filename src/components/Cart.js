import React from "react";
import BoxIcon from "./BoxIcon";

function Cart(props) {
  const { item } = props;
  return (
    <div className="p-4 border border-[#313856] backdrop-blur-lg rounded w-[100%] h-[100%]">
      <div className="pb-6">
        <BoxIcon icon={item?.icon} />
      </div>
      <h3 className="mb-2 font-medium leading-6">{item?.title}</h3>
      <p className="leading-6 text-[13px] text-[#C0C0C9]">
        {item?.description}
      </p>
    </div>
  );
}

export default Cart;
