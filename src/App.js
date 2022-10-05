import './App.css';
import { useEffect, useState } from "react";
import { Users } from "./users";
import Table from "./Table";
// import axios from "axios";

//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////SEARCH ON A DATATABLE

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
return (
  <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<Table data={Search(Users)} />}
  </div>
);
}


export default App;
