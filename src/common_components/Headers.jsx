import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useNavigate, Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Chatbox from "./Chatbox";
import Toast from "react-bootstrap/Toast";
import Message from "./Message";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import Logout from "../login_components/Logout";
import Offcanvas from "react-bootstrap/Offcanvas";
import Social from "./Social";

function Headers() {
  let logout = Logout();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const role = sessionStorage.getItem("role");
  console.log("role is " + role);
  const limitArray = (arr, limit) => {
    return arr.slice(0, limit);
  };

  const limitedMessage = limitArray(messages, 5);
  console.log(limitedMessage);
  const fetchMessages = async () => {
    try {
      const response = await AxiosService.get(`${ApiRoutes.GET_MESSAGE.path}`, {
        authenticate: ApiRoutes.GET_MESSAGE.authenticate,
      });

      //    console.log(response.data.users)
      let n = response.data.users;

      setMessages(response.data.users);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  useEffect(() => {
    fetchMessages();
  }, []);
  

  return (
    <Container fluid>
      <div>
      <Navbar
        id="mytopnav"
        className=" mytopnav bg-body-tertiary text-center"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand href="">
          <Image
            style={{ maxHeight: "80px" }}
            src="https://www.divinebharat7.com/assets/images/logo.png"
            rounded
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="AboutUs"
              menuVariant="light"
            >
              <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="/trainings">Trainings</NavDropdown.Item>
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/member">Members</Nav.Link>

            <Nav.Link href="/socialmedias">SocialMedias</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
       

        
          <Nav.Item className="user mx-5 g-3 float-end link-dark ">
            <Button variant="outline-primary">
              {" "}
              <Link to="/login">Login</Link>
            </Button>
            {/* <i class="fa fa-fw fa-user"></i> */}
            <Button variant="outline-primary">
              {" "}
              <Link to="/register"> SignUp</Link>
            </Button>
          </Nav.Item>
        
      </Navbar>
      </div>
      <div>
        <Navbar className=" mytopnav_mobile  bg-body-tertiary">
          <Container>
            <Navbar.Brand href="">
              <Image
                style={{ maxHeight: "80px" }}
                src="https://www.divinebharat7.com/assets/images/logo.png"
                rounded
              />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-around">
              <Navbar.Text>
                <Button onClick={toggleShowA} className="mb-2">
                  <strong>
                    <i class="fa-solid fa-bell"></i>
                  </strong>
                </Button>
              </Navbar.Text>
              <Navbar.Text>
                <Button onClick={handleShow}>
                  <i class="fa fa-bars"></i>
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Navbar.Brand href="">
                  <Image
                    style={{ maxHeight: "80px" }}
                    src="https://www.divinebharat7.com/assets/images/logo.png"
                    rounded
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link href="/home"><i class="fa-solid fa-house"></i> Home</Nav.Link>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="AboutUs"
                  menuVariant="light"
                >
                  <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                  <NavDropdown.Item href="/trainings">
                    Trainings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/socialmedias">SocialMedias</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Link to="/login" className="nav p-3" href="index.html">log
           
            {/* <span className='mx-2 link-danger'>Logout</span> */}
          </Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
        </div>
      <Toast
        show={showA}
       onClose={toggleShowA}
        className=" d-inline-block m-1 fixed-top mt-5"
        bg="light"
        float="right"
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Notification</strong>
          <small>
            {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}{" "}
          </small>
        </Toast.Header>
        <Toast.Body
          style={{
            overflow: "scroll",
            height: "300px",
            width: "350px",
            float: "left",
          }}
        >
          <div className="messages">
            {messages.map((msg, index) => (
              <Message key={index} msg={msg} />
            ))}
          </div>
        </Toast.Body>
      </Toast>
      <Social/>
    </Container>
  );
}
export default Headers;
