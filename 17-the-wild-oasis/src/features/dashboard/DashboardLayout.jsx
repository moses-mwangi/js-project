import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStay from "./useRecentStay";
import Stats from "./Stats";
import useCabin from "../cabins/useCabin";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  color: var(--color-grey-600);
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const {
    stay,
    isLoading: isStaying,
    confirmedStay,
    numDays,
  } = useRecentStay();

  const { isLoading: isLoading2, data: cabins } = useCabin();

  if (isLoading || isStaying || isLoading2) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStay={confirmedStay}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStay={confirmedStay} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
