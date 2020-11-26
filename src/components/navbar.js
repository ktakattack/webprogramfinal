import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='Navbar'>
                <div className='Navbar-container'>
                    <Link to='/' className='Navbar-logo'>
                        KRISTI CONRY <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                                EXPERIENCE
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                PROJECTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                                SKILLS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/education' className='nav-links' onClick={closeMobileMenu}>
                                EDUCATION
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/coursework' className='nav-links' onClick={closeMobileMenu}>
                                COMPLETED COURSEWORK
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/involvement' className='nav-links' onClick={closeMobileMenu}>
                                INVOLVEMENT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/hobbies' className='nav-links' onClick={closeMobileMenu}>
                                HOBBIES
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
