import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";

function Multipleinput() {
  const [name, setName] = useState({
    fname: "",
    lname: "",
    address: "",
    gender: "",
    hobbies: "",
  });
  // const [previmage, setPrevimage] = useState("");

  const handlechange = (e) => {
    console.log("event", e.target.value);

    // setPrevimage(URL.createObjectURL(e.target.files[0]));
    // const value =
    //   e.target.type === "checkbox" ? e.target.checked : e.target.value;
    // setPrevimage(e.target.files[0]);
    setName((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  
  const submitform = (e) => {
    e.preventDefault();
    // const userData = {
    //   title: name.fname,
    //   body: name.address,
    // };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", name)
      .then((res) => console.log("res", res) || console.log("res", res.status));
  };

  return (
    <div className="container">
      <Row>
        <Col>
          <h6>User input</h6>
          <form>
            Fname:
            <input
              type="text"
              name="fname"
              value={name.fname}
              onChange={handlechange}
            />
            <br />
            Lname:
            <input type="text" name="lname" onChange={handlechange} />
            <br />
            Gender:
            <input
              type="radio"
              value="male"
              name="gender"
              checked={name.gender === "male"}
              onChange={handlechange}
            />
            Male
            <br />
            <input
              type="radio"
              value="female"
              name="gender"
              checked={name.gender === "female"}
              onChange={handlechange}
            />
            Female
            <br />
            <input
              type="radio"
              value="transgender"
              name="gender"
              checked={name.gender === "transgender"}
              onChange={handlechange}
            />
            transgender
            <br />
            <br />
            Address:
            <select
              style={{ marginBottom: "20px" }}
              name="address"
              value={name.address}
              onChange={handlechange}
            >
              <option value="surat">Surat</option>
              <option value="pune">Pune</option>
              <option value="bangalore">bangalore</option>
            </select>
            <br />
            hobbies:
            <input
              type="checkbox"
              name="hobbies"
              value="tenis"
              checked={name.hobbies}
              onChange={handlechange}
            />{" "}
            tenis
            <input
              type="checkbox"
              name="hobbies"
              value="cricket"
              checked={name.hobbies}
              onChange={handlechange}
            />{" "}
            cricket
            <input
              type="checkbox"
              name="hobbies"
              value="football"
              checked={name.hobbies}
              onChange={handlechange}
            />{" "}
            football
            <br />
            <input type="file" name="images" onChange={handlechange} />
            <br />
            <Button type="submit" onClick={submitform}>
              Submit
            </Button>
            <br />
          </form>
        </Col>
        <Col>
          <h6>Display</h6>
          <div>
            <h1>
              {
                <img
                  // src={previmage}
                  alt="uploaded image"
                  width="500"
                  height="600"
                ></img>
              }
            </h1>
            Your Firstname :{name.fname}
            <br />
            Your Lastname :{name.lname}
            <br />
            Your Gender:{name.gender}
            <br />
            Your Address:{name.address}
            <br />
            Your Hobbies:
            {name.hobbies}
            <br />
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Multipleinput;
