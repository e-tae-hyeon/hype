import { OFFER_EMAIL } from "common/constants/string";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center caption text-neutral-400">
      <div>made by LTH</div>
      <div>문의 : {OFFER_EMAIL}</div>
    </footer>
  );
}

export default Footer;
