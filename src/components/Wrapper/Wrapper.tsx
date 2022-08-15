import { ReactNode } from "react";
import { Menu } from "../Menu/Menu";

type Props = {
  showMenu: () => void;
  hideMenu: () => void;
  menuState: boolean;
  children: ReactNode;
};

export const Wrapper = (props: Props) => {
  return (
    <>
      <Menu
        showMenu={props.showMenu}
        hideMenu={props.hideMenu}
        menuState={props.menuState}
      />
      <div className={"transition-[padding-left] duration-300 lg:pl-56"}>
        {props.children}
      </div>
    </>
  );
};
