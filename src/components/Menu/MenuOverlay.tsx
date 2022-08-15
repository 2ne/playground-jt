type Props = {
  hideMenu: () => void;
  menuState: boolean;
};

export const MenuOverlay = (props: Props) => {
  return (
    <>
      <div
        onClick={props.hideMenu}
        className={`fixed inset-0 z-40 bg-gray-800/50 transition-opacity duration-300
        ${
          props.menuState
            ? "cursor-pointer opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      ></div>
    </>
  );
};
