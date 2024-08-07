import React, { useEffect, useState } from 'react';
import axios from 'axios';


const endpoint = 'http://185.238.170.251:5000/api/users'
// const endpoint1 = 'http://localhost:5000/api/users'

interface User {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get(endpoint)
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
