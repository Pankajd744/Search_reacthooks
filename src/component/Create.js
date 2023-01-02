import React from "react";
import { useNavigate } from "react-router-dom";
function Create() {
  const emp = [
    { id: 1, name: "pankaj", age: 10 },
    { id: 2, name: "sonu", age: 20 },
    { id: 3, name: "monu", age: 30 },
  ];

  const handledelete = (id) => {
    const history = useNavigate;
    const index = emp
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    emp.splice(index, 1);
    history("/");
  };
  return (
    <div style={{marginLeft:"50%"}}>
      <table style={{ border: "2px solid red", textAlign: "center" }}>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>

        {emp.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button onClick={() => handledelete(item.id)}>DELETE</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Create;
