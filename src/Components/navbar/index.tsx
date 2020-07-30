import React, {Component} from 'react';

const NavBar: React.FC =  () => {
        return (
            <nav>
                <div className="nav-wrapper">
                    <span className="brand-logo">Instr</span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a role="button">Documentation</a></li>
                        <li><a role="button">Login</a></li>
                    </ul>
                </div>
            </nav>
        );
}


export default NavBar;
