import { useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  top: 4rem;
  z-index: 9999999;
`;

const StyledButton = styled.span`
  width: 19rem;
  text-align: left;
  background: none;
  border: none;
  color: var(--color-grey-800);
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

function Menus({
  cabinId,
  edit,
  delet,
  duplicate,
  onDelete,
  onDuplicate,
  onEdit,
  detailsBook,
  checkBook,
  deleteBook,
  bookingId,
  status,
  checkBookOut,
  onCheckOut,
}) {
  const [open, setOpen] = useState(false);
  const [openId, setOpeId] = useState("");
  const navigate = useNavigate();

  function showIt() {
    if (cabinId) setOpen((open) => !open);
    openId === "" || openId !== cabinId ? setOpeId(cabinId) : setOpeId("");
  }

  function handleDel() {
    if (!cabinId) return;
    if (cabinId) setOpen((open) => !open);
    onDelete();
  }

  function handleEdit() {
    if (!cabinId) return;
    if (cabinId) setOpen((open) => !open);
    onEdit();
  }
  function handleDupl() {
    if (!cabinId) return;
    if (cabinId) setOpen((open) => !open);
    onDuplicate();
  }
  /////booking
  function show() {
    if (bookingId) setOpen((open) => !open);
    openId === "" || openId !== bookingId ? setOpeId(bookingId) : setOpeId("");
  }

  function handleShowDeleteForm() {
    if (bookingId !== openId) return;
    if (bookingId) setOpen((open) => !open);
    onDelete();
  }

  if (deleteBook && checkBook && detailsBook)
    return (
      <StyledMenu>
        <StyledToggle onClick={() => show()}>
          <HiEllipsisVertical />
        </StyledToggle>
        {open && openId !== "" && (
          <StyledList>
            <StyledButton onClick={() => navigate(`/booking/${bookingId}`)}>
              {detailsBook} See details
            </StyledButton>
            {status === "unconfirmed" && (
              <StyledButton onClick={() => navigate(`/checkin/${bookingId}`)}>
                {checkBook} Check in
              </StyledButton>
            )}

            {status === "checked-in" && (
              <StyledButton onClick={() => onCheckOut()}>
                {checkBookOut} Check out
              </StyledButton>
            )}

            <StyledButton onClick={handleShowDeleteForm}>
              {deleteBook} Delete booking
            </StyledButton>
          </StyledList>
        )}
      </StyledMenu>
    );

  return (
    <StyledMenu>
      <StyledToggle onClick={() => showIt()}>
        <HiEllipsisVertical />
      </StyledToggle>
      {open && (
        <StyledList>
          <StyledButton onClick={handleDupl}>
            {duplicate} Duplicate
          </StyledButton>
          <StyledButton onClick={handleEdit}>{edit} Edit</StyledButton>
          <StyledButton onClick={handleDel}>{delet} Delete</StyledButton>
        </StyledList>
      )}
    </StyledMenu>
  );
}

export default Menus;
