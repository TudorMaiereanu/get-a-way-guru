"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-light static-top" style={{backgroundColor: "#19393B"}}>
                <div class="d-flex flex-grow-1 mr-3 ml-3">
                    <a class="navbar-brand text-white mr-auto" href="#">
                        <img src="https://github.com/TudorMaiereanu/get-a-way/blob/master/src/components/assets/logo.png?raw=true" alt="logo" style={{width:"60px"}}/>
                    </a>
                    <ul class="navbar-nav">
                        <li class="nav-item my-auto">
                            <a class="nav-link text-white h4"  href="#login">Login</a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link text-white h4"  href="#register">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default withRouter(Header);