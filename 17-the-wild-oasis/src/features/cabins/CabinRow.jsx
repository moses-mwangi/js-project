import styled from "styled-components";
import { useState } from "react";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";
import AddCabin from "./AddCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  position: relative;
  color: var(--color-grey-700);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const { isDeleting, deleteCabine } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} </div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <Menus
          cabinId={cabinId}
          onDelete={() => setShowDeleteForm((con) => !con)}
          onDuplicate={() => handleDuplicate()}
          onEdit={() => setShowForm((show) => !show)}
          duplicate={<HiSquare2Stack />}
          delet={<HiTrash />}
          edit={<HiPencil />}
        />
      </TableRow>
      {showForm && (
        <Modal onClose={() => setShowForm((show) => !show)}>
          <CreateCabinForm
            cabinToEdit={cabin}
            onCloseModal={() => setShowForm((show) => !show)}
          />
        </Modal>
      )}
      {showDeleteForm && (
        <Modal onClose={() => setShowDeleteForm((show) => !show)}>
          <ConfirmDelete
            resourceName="Cabin"
            disabled={isDeleting}
            onDelete={() => deleteCabine(cabinId)}
            reset={setShowDeleteForm}
          />
        </Modal>
      )}
    </>
  );
}

export default CabinRow;
