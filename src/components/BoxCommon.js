import React from "react";

function BoxCommon(props) {
  const { title, icon, children } = props;
  return (
    <div className="px-4 leading-6 w-[100%] h-[100%]">
      <div className="flex gap-2 pb-3">
        {icon}
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default BoxCommon;
