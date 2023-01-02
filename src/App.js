import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, Form } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Reads from "./component/Reads";
import Create from "./component/Create";
import Searchbar from "./component/Searchbar";
import Multiple from "./component/Multipleinput";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Row className="p-1 mb-1 bg-danger text-white">
            <Col style={{ display: "flex", backgroundColor: "aliceblue" }}>
              <Col>
                <Link to="/read">Reads</Link>
              </Col>
              <Col>
                <Link to="/create">Create</Link>
              </Col>
              <Col>
                <Link to="/search">Search</Link>
              </Col>
              <Col>
                <Link to="/multiple">Multiple</Link>
              </Col>
            </Col>
          </Row>
        </Container>

        <Routes>
          <Route path="read" element={<Reads />} />
          <Route path="create" element={<Create />} />
          <Route path="search" element={<Searchbar />} />
          <Route path="multiple" element={<Multiple />} />
        </Routes>
      </BrowserRouter>
      {/* <Reads />
      <Create /> */}
    </div>
  );
}
export default App;
