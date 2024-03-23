import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const SideBarStyle = styled.aside`
  background-color: blue;
  grid-row: 1 / -1;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function SideBar() {
  return (
    <SideBarStyle>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </SideBarStyle>
  );
}

export default SideBar;
