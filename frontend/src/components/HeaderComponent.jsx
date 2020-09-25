import React, { useState } from 'react';
import { FormControl, Button } from "react-bootstrap";
import { IoIosCart,IoIosPerson,IoIosHeartEmpty} from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Badge
} from 'reactstrap';



const HeaderComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const noOfItems = useSelector(state => state.cart);
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userInfo, userSignin)
  const { cartItems } = noOfItems;


  const toggle = () => setIsOpen(!isOpen);
  const isLikedItems = [];
  return (
    <div>
      <Navbar collapseOnSelect color="light" expand="md" variant="dark">
        <NavbarBrand href="/"> <img
          className="img-obj-fit"
          src="https://www.seekpng.com/png/detail/428-4289671_logo-e-commerce-good-e-commerce-logo.png"
          alt="First slide"
          width="90px"
          background-color="black"
        /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
  <NavLink href="/product/:id"><IoIosHeartEmpty>
    <Badge className="custom" color="light">
      {isLikedItems}
      </Badge></IoIosHeartEmpty>Liked {''}</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Form class="form">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="search-bar"
                />
              </Form>
            </NavItem>
            <NavItem>
              <Button variant="outline-info" className="from-button">
                Search
          </Button>
            </NavItem>
          </Nav>
          <Nav>
            <NavLink href="/cart/:id?"><IoIosCart>Cart</IoIosCart>Cart{''}
            {cartItems.length > 0 ? <Badge className="custom" color="success" style={{fontSize:10, width:15, height:15,top:30}}>
              <p style={{color:"white",fontSize:"20"}}>{cartItems.length}</p>
              </Badge> : null}
            </NavLink>
            {/* <NavLink href="/login"><IoIosPerson>
              </IoIosPerson>Login{''}
            </NavLink> */}
            {/* {
              userInfo ? <NavLink href="/profile">{userInfo.name}</NavLink> :
            <NavLink href="/authlogin"><IoIosPerson></IoIosPerson>Login{''}</NavLink>
            } */}
            <NavLink href="/authlogin"><IoIosPerson></IoIosPerson>Login{''}</NavLink>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;