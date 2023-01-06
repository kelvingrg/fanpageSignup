// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function NavBar() {
//   return (
//     <>
//     <div className='container-fluid col-md-8 col-sm-11  col-lg-8 col-12  mt-3 align-self-center '>

    
// <div className=' row border d-flex   justify-content-evenly align-items-center'>

//   <div  className=' align-self-center d-flex'>
//   <h4 className='neon '>FANCONVQ</h4>
//   </div>
 
//    <div className=' col-xl-3 col-md-6 col-sm-12 align-self-center'>
// <p className=''>How fanconvo works ?</p>
// <p className='lh'>@2021 faconvo</p>
//    </div>
// <div className='flex'>  <a href="">Sign up </a>
//    <a href="">Login</a>
//    </div>
 




// </div>

// </div> 
  
//     </>
//   );
// }

// export default NavBar;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

function NavBar() {
  return (
    <div className='container-fluid col-md-8 col-sm-11  col-lg-8 col-12   align-self-center '>
       <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className=' d-flex flex-column' > 
        <h3 className='neon lh-sm'>
        FANCONVQ
        </h3>
        <p className='signup text-light lh-sm'>A market place for conversations, mentorships and performsnces</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
       
      
          </Nav>
          <Nav >
            <Nav.Link href="#deets" className='signup'>SignUp</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='signup'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;