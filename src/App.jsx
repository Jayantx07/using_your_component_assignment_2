import { useState } from "react";
import "./App.css";

const users = [
  {
    id: 1,
    name: "John Doe",
    message: "Excited about the new UI design!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Excited about the new UI design!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alice Brown",
    message: "Excited about the new UI design!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Bob Johnson",
    message: "Excited about the new UI design!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [likes, setLikes] = useState({});

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <header>
        <h1>Postcards</h1>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <img src={user.image} alt={user.name} className="profile-image" />
            <div className="card-content">
              <h2>{user.name}</h2>
              <p>{user.message}</p>
              <button
                className={likes[user.id] ? "like-button liked" : "like-button"}
                onClick={() => handleLike(user.id)}
              >
                {likes[user.id] ? "❤️ Liked" : "🤍 Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
