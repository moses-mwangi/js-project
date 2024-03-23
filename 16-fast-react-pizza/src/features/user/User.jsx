import { useSelector } from "react-redux";

function User() {
  const { username } = useSelector((store) => store.user);

  if (!username) return;
  return <div className="text-sm font-semibold md:block">{username}</div>;
}

export default User;
