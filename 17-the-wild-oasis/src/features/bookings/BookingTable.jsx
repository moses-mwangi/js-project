import Table from "../../ui/Table";
import styled from "styled-components";
import Empty from "../../ui/Empty";
import useBookings from "./useBookings";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";

const StyleTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 2fr 2.4fr 1.4fr 1fr 0.3fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function BookingTable() {
  const { isLoading, bookings, error } = useBookings();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (error) return error.message;

  if (bookings?.length === 0) return <Empty resourceName="bookings" />;

  ////  Filter bookings
  if (!bookings.length) return;
  const filterValue = searchParams.get("status") || "all";
  let filteredBoking;
  if (filterValue === "all") filteredBoking = bookings;

  if (filterValue === "checked-out")
    filteredBoking = bookings.filter((data) => data.status === "checked-out");

  if (filterValue === "checked-in")
    filteredBoking = bookings.filter((data) => data.status === "checked-in");

  if (filterValue === "unconfirmed")
    filteredBoking = bookings.filter((data) => data.status === "unconfirmed");

  ////sort bookings
  const sortBy = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedBooking = filteredBoking.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <StyleTable>
      <TableHeader>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </TableHeader>

      <Table data={sortedBooking} />
    </StyleTable>
  );
}

export default BookingTable;
