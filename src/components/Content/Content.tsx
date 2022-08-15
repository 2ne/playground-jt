import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Content = (props: Props) => {
  return (
    <div className="w-full p-4 lg:p-6">{props.children}</div>
  );
}