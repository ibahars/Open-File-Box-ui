import React from "react";
import classNames from "classnames";

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  href,
  isActive = false,
}) => {
// We are using the classNames library to combine class names
const liClassName = classNames(
  "flex items-center w-[307px] h-[69px] px-5 py-4 gap-4 text-white hover:bg-sky-700 transition-colors",
  {
    "bg-sky-900": isActive, // Conditionally adds the background color

  }
);

return (
  <li className={liClassName}>
    <a href={href} className="flex items-center text-white no-underline ">
      <span>{icon}</span>
    </a>
    <span className="text-white">{text}</span>
  </li>
);
};

export default MenuItem;
