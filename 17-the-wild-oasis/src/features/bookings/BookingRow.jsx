import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useCheckOut from "../check-in-out/useCheckout";
import useDeleteBooking from "./useDeleteBooking";
import { deleteBooking } from "../../services/apiBookings";
import Spinner from "../../ui/Spinner";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr 2.4fr 1.4fr 1fr 0.3fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
    color: var(--color-grey-700);
    font-size: 1.4rem;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-grey-600);
`;
const StyleButton = styled.button`
  font-size: 23px;
  color: var(--color-grey-600);
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;

  &:hover {
    background-color: var(--color-grey-200);
    transition: 0.5s;
  }
`;

function BookingRow({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const { checkout, isCheckout } = useCheckOut();
  const { deletingBooking, isDeletingBooking } = useDeleteBooking();

  // if (isCheckout || isDeletingBooking) return <Spinner />;

  const {
    id: bookingId,
    created__at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { email, fullName },
    cabins: { name: cabinName },
  } = data;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <TableRow>
        <Cabin>{cabinName}</Cabin>

        <Stacked>
          <span>{fullName}</span>
          <span>{email}</span>
        </Stacked>
        <Stacked>
          <span>
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            &rarr; {numNights} night stay
          </span>

          <span>
            {format(new Date(startDate), "MMM dd yyyy")} &mdash;
            {format(new Date(endDate), "MMM dd yyyy")}
          </span>
        </Stacked>
        <Tag type={statusToTagName[status]}>{status}</Tag>
        <Amount>{formatCurrency(totalPrice)}</Amount>

        <Menus
          bookingId={bookingId}
          detailsBook={<HiEye />}
          checkBook={<HiArrowDownOnSquare />}
          checkBookOut={<HiArrowUpOnSquare />}
          deleteBook={<HiTrash />}
          onDelete={() => setShowDeleteForm((con) => !con)}
          status={status}
          onCheckOut={() => checkout(bookingId)}
        />
      </TableRow>
      {showModal && <Modal onClose={() => setShowModal((show) => !show)} />}
      {showDeleteForm && (
        <Modal onClose={() => setShowDeleteForm((show) => !show)}>
          <ConfirmDelete
            resourceName="Booking"
            disabled={isDeletingBooking}
            onDelete={() => deletingBooking(bookingId)}
            reset={setShowDeleteForm}
          />
        </Modal>
      )}
    </>
  );
}

export default BookingRow;
