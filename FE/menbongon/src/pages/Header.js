import React from 'react';
import '../css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import main_back from '../images/main_back.jpg'

function Header(){
    return(
        <header className="masthead" style = {{backgroundImage : `url(${main_back})`}}> 
            <div class="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>입시 뿌셔</h1>
                            <span className="subheading">대학생과 청소년을 연결하는 교육불평등 해소 플랫폼</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
