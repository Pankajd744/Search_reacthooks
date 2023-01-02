import React, { useEffect, useState } from "react";
import axios from "axios";

function Reads() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [ischeck, setIscheck] = useState(false);
  const [dropdown, setDropdown] = useState();
  const [gender, setGender] = useState("male");
  const [emp, setEmp] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setEmp(res.data));
    console.log("hhrh");
  }, []);
  const onsubmit = () => {
    axios
      .post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title: fname,
          body: lname,
          // body: ischeck,
          // body: dropdown,
        },
        []
      )
      .then((res) => console.log("res", res));
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        Details of employee fname:
        <input
          type="text"
          name="fname"
          // value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        {fname}
        <br />
        lname:
        <input
          type="text"
          name="lname"
          // value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        {lname}
        <br />
        please friuts:{dropdown}
        <select value={dropdown} onChange={(e) => setDropdown(e.target.value)}>
          <option value="apple">apple</option>
          <option value="mango">mango</option>
          <option value="orange">orange</option>
        </select>
        <br />
        <input
          type="checkbox"
          checked={ischeck}
          onChange={(e) => setIscheck(e.target.checked)}
        />
        checkbox is :{ischeck ? "true" : "false"}
        <br />
        your radio:{gender}
        <br />
        <input
          type="radio"
          checked={gender === "male"}
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />
        male
        <br />
        <input
          type="radio"
          checked={gender === "female"}
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />
        female
        <br />
        <input
          type="radio"
          checked={gender === "transgender"}
          value="transgender"
          onChange={(e) => setGender(e.target.value)}
        />
        transgender
        <br />
        <button onClick={onsubmit}>Submit</button>
        <div>
          {emp &&
            emp.map((d, index) => {
              return (
                <div key={index}>
                  <div>{d.id}</div>
                  <div>{d.title}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default Reads;
