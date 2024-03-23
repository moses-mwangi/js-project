import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const StyleAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  position: relative;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 4rem auto 6rem auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  z-index: 999;
`;

const Main = styled.main`
  padding: 4rem 4.8re 6.4rem;
  background-color: var(--color-grey-50);
  overflow-y: scroll;
`;

// const Containers = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;

function AppLayout() {
  return (
    <StyleAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyleAppLayout>
  );
}

export default AppLayout;
