import { useState } from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit} className=" ">
      <p className=" mb-4 text-sm text-stone-600">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className=" mb-8 w-72  rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none  focus:ring focus:ring-yellow-400 focus:ring-offset-2 md:px-6 md:py-3"
        type="text"
        placeholder="Your full name "
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
