import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((form) => !form)}>Add cabin</Button>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal((form) => !form)}>
          <CreateCabinForm
            onCloseModal={() => setIsOpenModal((form) => !form)}
          />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
