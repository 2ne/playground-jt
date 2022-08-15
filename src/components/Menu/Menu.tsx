import { NavLink } from "react-router-dom";
import { MenuOverlay } from "./MenuOverlay";

type Props = {
  showMenu: () => void;
  hideMenu: () => void;
  menuState: boolean;
};

export const Menu = (props: Props) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 min-h-screen w-56 -translate-x-full bg-white transition-all duration-300 lg:translate-x-0 lg:border-r lg:border-gray-200/75
        ${props.menuState ? "!translate-x-0" : ""}`}
      >
        <div className="flex h-16 items-center px-6 text-lg font-medium text-gray-900">
          Logo
        </div>
        <nav className="py-2 px-5">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                onClick={props.hideMenu}
                className={({ isActive }) => {
                  return `group flex items-center rounded-md px-3 py-2 font-medium ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "bg-white hover:bg-gray-50 hover:text-gray-800"
                  }`;
                }}
              >
                <span className={"w-8"}>
                  <i className="pi pi-home"></i>
                </span>
                <span className="truncate"> Home </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <MenuOverlay menuState={props.menuState} hideMenu={props.hideMenu} />
    </>
  );
};
