import React, { useState } from 'react';
import {
	Nav,
	Navbar,
	Tooltip,
	OverlayTrigger,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faGithub,
	faFacebookF,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../Context';

export default function NavBar({
	show,
	color = '#c7ccec',
}) {
	const [redirectPossible, setRedirectPossible] =
		useState(false);
	function something() {
		setRedirectPossible(true);
		localStorage.removeItem('role');
		logout();
	}
	const { logout } = useAuth();
	return (
		<div>
			<Navbar
				bg='transparent'
				fixed='top'
				variant='light'
			>
				{redirectPossible && <Redirect to='/' />}
				<Navbar.Brand
					href='#home'
					className='px-3'
					style={{ color: color }}
				>
					<strong>QR Attendance</strong>
				</Navbar.Brand>
				<Navbar.Collapse className='justify-content-end'>
					<Nav className='mr-auto'>
						{show && (
							<OverlayTrigger
								placement='bottom'
								delay={{ show: 250, hide: 400 }}
								overlay={(props) => (
									<Tooltip
										id='button-tooltip'
										{...props}
									>
										Logout
									</Tooltip>
								)}
							>
								<Nav.Link
									href='#'
									onClick={something}
								>
									<FontAwesomeIcon
										icon={faUserLock}
										size='lg'
										color={color}
									/>
								</Nav.Link>
							</OverlayTrigger>
						)}
					</Nav>
					{/* <Form inline>
            <Nav className="mr-auto"> 
              <Nav.Link>made for Hiku<FontAwesomeIcon color="#8d0101" icon={faHeart} /></Nav.Link>
            </Nav>
            <Nav className="mr-auto justify-content-end"> 
              <Nav.Link>
                <Button onClick={something}>
                  <FontAwesomeIcon icon={faFingerprint} />
                </Button>
              </Nav.Link>
            </Nav>
          </Form> */}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
