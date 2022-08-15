import { Wrapper } from "../components/Wrapper/Wrapper";
import { Header } from "../components/Header/Header";
import { Content } from "../components/Content/Content";

type Props = {
  showMenu: () => void;
  hideMenu: () => void;
  menuState: boolean;
};

const HomePage = (props: Props) => {
  return (
    <Wrapper
      showMenu={props.showMenu}
      hideMenu={props.hideMenu}
      menuState={props.menuState}
    >
      <Header
        showMenu={props.showMenu}
        hideMenu={props.hideMenu}
        title={"Home"}
      ></Header>
      <Content>Content goes here</Content>
    </Wrapper>
  );
};

export default HomePage;
