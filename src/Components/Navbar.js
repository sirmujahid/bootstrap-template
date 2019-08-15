import React, { Component } from 'react'

export default class Navbar extends Component {
      render() {
        const mymenu = ['Home','About Us','Services','Products','Contact Us']
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                       <a className="navbar-brand" href="#">Techsolint</a>
                        <ul className="navbar-nav ml-auto">
                          {mymenu.map((data)=>
                            <li className="nav-item">
                              <a className="nav-link" href="#">{data}</a>
                            </li>
                          )}
                        </ul>
                </nav>
              </div>
        )
    }
}
