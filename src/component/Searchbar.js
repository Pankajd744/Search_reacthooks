import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function Searchbar() {
  const [data, setData] = useState([]); //api data store
  const [filtervalue, setFiltervalue] = useState(); //search textbox enter the data
  const [storeapidata, setStoreapidata] = useState(); //searchdata store from api
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setData(res.data) || setStoreapidata(res.data));
  };
  ////search
  const Onsearch = (e) => {
    if (e.target.value == "") {
      setData(storeapidata);
    } else {
      const result = storeapidata.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      //Title is value table which is display
      setData(result);
    }
    setFiltervalue(e.target.value);
  };
  //delete
  const ondelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    //second way
    // axios.delete("https://jsonplaceholder.typicode.com/todos/" + id).then(res=>console.log("res",res))
    getdata();
  };
  return (
    <div>
      <div style={{ marginLeft: "30%" }}>
        <>
          <input
            placeholder="Please search text"
            type="text"
            value={filtervalue}
            onInput={(e) => Onsearch(e)}
          />
          <table style={{ border: "2px solid black", marginTop: "5px" }}>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>

            {data.map((item, index) => {
              return (
                <tr key={item.index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <Button variant="danger" onClick={() => ondelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </table>
        </>
      </div>
    </div>
  );
}
export default Searchbar;
