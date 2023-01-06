import Link from "next/link";
import React from "react";

type Props = {
  direction?: "vertical" | "horizontal";
  onClick?: () => void;
};

function LinkItem({
  to = "/",
  content,
  onClick,
}: {
  to: string;
  content: string;
  onClick: () => void;
}) {
  return (
    <Link href={to} onClick={onClick} className="p-4 m-[-1rem] h3">
      {content}
    </Link>
  );
}

type Nav = "typography" | "color" | "layout" | "card" | "arrange";

const navMap: Record<Nav, { to: string; content: string }> = {
  typography: { to: "/typography", content: "Typography" },
  color: { to: "/color", content: "Color" },
  layout: { to: "/layout", content: "Layout" },
  card: { to: "/card", content: "Card" },
  arrange: { to: "/arrange", content: "Arrange" },
};

function NavItems({ direction = "vertical", onClick = () => {} }: Props) {
  const navs = Object.values(navMap);

  return (
    <nav
      className={`${
        direction === "vertical" ? "flex-col" : "flex-row"
      } flex gap-4`}
    >
      {navs.map((N) => (
        <LinkItem to={N.to} content={N.content} onClick={onClick} key={N.to} />
      ))}
    </nav>
  );
}

export default NavItems;
