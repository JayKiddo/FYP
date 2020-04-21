import NProgress from 'nprogress';
import {useState} from 'react';
import {APP_NAME} from '../config';
import Link from 'next/link';
import {logout} from '../actions/auth';
import {isLoggedIn} from '../actions/handleCookie';
import Router from 'next/router';
import Search from './Search'
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
  NavbarText
} from 'reactstrap';


const Header = () => {

  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

          {isLoggedIn() && (
             <React.Fragment>
             <NavItem>
              <Link href="/journals">
              <NavLink style={{cursor: 'pointer'}}>Journals</NavLink>
              </Link>
            </NavItem>
            </React.Fragment>
          )}

          {!isLoggedIn() && (
            <React.Fragment>
               <NavItem>
              <Link href="/login">
              <NavLink style={{cursor: 'pointer'}}>Log In</NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/register">
              <NavLink style={{cursor: 'pointer'}}>
                Register
              </NavLink>
              </Link>
            </NavItem>
            </React.Fragment>
            )}  

          {isLoggedIn() && isLoggedIn().role === 'member' && (
              <NavItem>
              <Link href="/member">
              <NavLink style={{cursor: 'pointer'}}> 
                {`Member's Dashboard`}
              </NavLink>
              </Link>              
            </NavItem>
            )}

              {isLoggedIn() && isLoggedIn().role === 'admin' && (
              <NavItem>
              <Link href="/admin">
              <NavLink> 
              {`${isLoggedIn().name}'s Dashboard`}
              </NavLink>
              </Link>              
            </NavItem>
            )}

            {isLoggedIn() && (
              <NavItem>
              <NavLink style={{cursor: 'pointer'}} onClick={()=>logout(()=>Router.replace(`/login`))}>
                Logout
              </NavLink>              
            </NavItem>
            )}

            <NavItem>
              <Link href="/about">
              <NavLink style={{cursor: 'pointer'}} >
                About
              </NavLink>
              </Link>              
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
      <Search/>
    </div>
  );
};

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

export default Header;





