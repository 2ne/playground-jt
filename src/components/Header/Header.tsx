import { ReactNode } from "react";

type HeaderProps = {
  title: string;
  children?: ReactNode;
  showMenu: () => void;
  hideMenu: () => void;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className="sticky top-0 z-30 flex h-16 flex-grow items-center border-b border-gray-200 bg-white/95 px-4 lg:px-6">
      <button
        onClick={props.showMenu}
        type="button"
        className="mr-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 lg:hidden"
      >
        <i className="pi pi-bars text-lg"></i>
      </button>
      <div className="text-lg font-medium text-gray-900">{props.title}</div>
      <div className="ml-auto">{props.children}</div>
    </div>
  );
};
