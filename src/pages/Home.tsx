import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const router = useNavigate();
  const [roomCode, setRoomCode] = React.useState("");
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("roomCode", roomCode);
    router(`/room/${roomCode}`);
  };
  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="">Enter room code</label>
          <input
            type="text"
            required
            placeholder="Enter room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Home;
