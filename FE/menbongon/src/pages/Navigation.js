import React from 'react'
import '../css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">입뿌</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">Menu</span>
            </button>                                
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">입뿌</li>
                    <li class="nav-item"><Link to="/myinfo">정보수정</Link></li>
                    <li class="nav-item"><Link to="/board">게시판</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;