import React from 'react'
import '../css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
    return(
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                        <li class="list-inline-item">
                            <a href="https://www.facebook.com/menbongdan/">
                                <span class="fa-stack fa-lg">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://cafe.naver.com/menbongdan">
                                <span class="fa-stack fa-lg">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fas fa-coffee fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://github.com/menbongon/MenBongON">
                                <span class="fa-stack fa-lg">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <p class="copyright text-muted">Copyright &copy; MenbongON 2019</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
