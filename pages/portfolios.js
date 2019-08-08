import React, { Component } from "react";
import Link from "next/link";

class Portfolios extends Component{
    render(){
        return ( <div>
            <h2>Portfolios page from class component.</h2>
            <Link href={'/'}>
                <a href={ "/blogs" }>Home</a>
            </Link>
            
            <a href={ "/cv" }>CV</a>
            <a href={ "/index" }>Home</a>
            <a href={ "/portfolios" }>Portfolio</a>
        </div> );
    }
}

export default Portfolios;