import React from "react";
const MemoChild = (props) => {
  console.log("memo");
  return (
    <div>
      <h1>child {props.textchild}</h1>
    </div>
  );
};
export default React.memo(MemoChild);
