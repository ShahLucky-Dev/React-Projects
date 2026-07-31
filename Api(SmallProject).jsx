import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();
  }, []);

  /*useEffect(() => {

  fetch("https://dummyjson.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }*/

  return (
    <div>
      <div className="cardsContainer">
        {users.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h2>{item.firstName}</h2>
              <img src={item.image} className="userImg" />
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </div>
            // <h3>
            //   {item.firstName}- {item.age} - {item.phone}
            // </h3>
          );
        })}
      </div>
    </div>
  );
}

export default App;
