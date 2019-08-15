import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
<div className="footerbackground"> 
    <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <p> Exercitation laborum consequat duis culpa velit eu sit culpa sunt. Veniam Lorem sint laborum eiusmod esse irure elit adipisicing sit cillum ea cillum nulla. Aliquip dolor veniam culpa ad consectetur cillum ea ad reprehenderit tempor aliquip sit.</p>
                </div>
                            
                         

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Products</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                </div>
                            
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Services</h5>
                    <ul className="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                </div>     
            </div>
</div>
<hr /> 
        <div className="footer-copyright text-center py-3">© 2018 Copyright: Techsolint.com
        </div>
    </footer>                
</div>

        );
    }
}

