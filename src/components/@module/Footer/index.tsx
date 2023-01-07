import {
  MY_BLOG_URL,
  MY_GITHUB_REPO_URL,
  OFFER_EMAIL,
} from "common/constants/string";
import { SvgIcon } from "components/@base";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 caption text-neutral-400">
      <div className="flex gap-4">
        <a href={MY_GITHUB_REPO_URL} className="p-4">
          <SvgIcon name="github" />
        </a>
        <a href={MY_BLOG_URL} className="p-4">
          <SvgIcon name="tistory" />
        </a>
      </div>
      <address className="text-center">
        <div>made by LTH</div>
        <div>문의 : {OFFER_EMAIL}</div>
      </address>
    </footer>
  );
}

export default Footer;
