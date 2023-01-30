import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.css';
const Navbarx = () => {
	return (
		<Navbar
			// bg='light'
			expand='lg'
			style={{
				position: 'fixed',
				top: '0',
				left: 0,
				zIndex: '1000',
				width: '100%',
			}}
			className='navbar'
		>
			<Container>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					style={{ border: 'none' }}
				/>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#header'>Home</Nav.Link>
						<Nav.Link href='#about'>About</Nav.Link>
						<Nav.Link href='#services'>Services</Nav.Link>
						<Nav.Link href='#skills'>Skills</Nav.Link>
						<Nav.Link href='#projects'>Portfolio</Nav.Link>
						<Nav.Link href='#contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navbarx;
