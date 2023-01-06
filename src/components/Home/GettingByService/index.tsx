import { CardBase } from "components/@base";
import React from "react";

function GettingByService() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="h3">이런 것들을 알 수 있어요!</h3>
      <CardBase>
        <ul className="px-4 list-disc">
          <li>Typography</li>
          <li>Color</li>
          <li>Layout</li>
          <li>Card</li>
          <li>Arrange</li>
        </ul>
      </CardBase>
    </div>
  );
}

export default GettingByService;
