'use client';
import './navbar.css'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const [page, setPage] = useState('');

    const handleToggle = () => {
        setActive(!isActive);
    };

    const pathname = usePathname();

    useEffect(() => {
        setActive(false);
        setPage(pathname);
      }, [pathname]);

    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-navbar-tile" style={{ paddingRight: '0.75rem !important', paddingLeft: '0.75rem !important' }}>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" href="/">
                            ⚡️
                        </Link>
                        <a 
                            role="button"
                            className={isActive ? "navbar-burger is-active" : 'navbar-burger'}
                            aria-label="menu" 
                            aria-expanded="false" 
                            data-target="navbar"
                            onClick={handleToggle}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div 
                        id="navbar" 
                        className={isActive ? "navbar-menu is-active" : 'navbar-menu'}
                    >
                        <div className="navbar-end">
                            <Link className={`navbar-item ${page == '/' ? 'is-selected' : ''}`} href="/">
                                Home
                            </Link>
                            <Link className={`navbar-item ${page == '/about' ? 'is-selected' : ''}`} href="/about">
                                About
                            </Link>
                            <Link className={`navbar-item ${page == '/services' ? 'is-selected' : ''}`} href="/services">
                                Services
                            </Link>
                            <Link className={`navbar-item ${page == '/projects' ? 'is-selected' : ''}`} href="/projects">
                                Projects
                            </Link>
                            <Link className={`navbar-item ${page == '/contact' ? 'is-selected' : ''}`} href="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </article>
        </div>
    );
}

export default Navbar;