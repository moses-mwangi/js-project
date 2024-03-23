import styled from "styled-components";
import BookingRow from "../features/bookings/BookingRow";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;
function Table({ data }) {
  const [searchParams] = useSearchParams();
  const curPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  let paginationData;
  if (curPage === 1) paginationData = data?.slice(0, 10);
  if (curPage === 2) paginationData = data?.slice(10, 20);
  if (curPage === 3) paginationData = data?.slice(20, 24);

  return (
    <>
      <div>
        {paginationData?.map((dat) => (
          <BookingRow data={dat} key={dat.id} />
        ))}
      </div>
      <Footer>
        <Pagination data={data} />
      </Footer>
    </>
  );
}

export default Table;
