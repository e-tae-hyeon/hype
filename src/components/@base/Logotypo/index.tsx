import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "assets/images/hype.png";

function Logotypo() {
  return (
    <Link href="/" className="p-4 m-[-1rem] ">
      <Image src={logo} alt="HYPE" width={100} height={50} />
    </Link>
  );
}

export default Logotypo;
