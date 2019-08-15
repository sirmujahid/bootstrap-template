import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div container="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-12"> 
                        <div className="card">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1543413042-36028ccc7638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Web Designing</h5>
                                <p>Deserunt culpa voluptate sit occaecat veniam.</p>
                                <a href="#" className="card-link"> See Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-3"> 
                    <img class="card-img-top" src="https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">Web Development</h5>
                                <p>Deserunt culpa voluptate sit occaecat veniam.</p>
                                <a href="#" className="card-link"> See Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-3"> 
                        <div className="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Web Hosting</h5>
                                <p>Deserunt culpa voluptate sit occaecat veniam.</p>
                                <a href="#" className="card-link"> See Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-3"> 
                        <div className="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/1246743/pexels-photo-1246743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Custom Solution</h5>
                                <p>Deserunt culpa voluptate sit occaecat veniam.</p>
                                <a href="#" className="card-link"> See Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
