import React, { Component } from "react";
import Link from "next/link";

class Header extends Component{
    render(){
        return ( <div>
            <p>{ this.props.title }</p>
            { this.props.children }
            <Link href={ "/" }>
                <a>Home</a>
            </Link>
            <Link href={ "/blogs" }>
                <a>Blogs</a>
            </Link>
            <Link href={ "/cv" }>
                <a>CV</a>
            </Link>
            <Link href={ "/about" }>
                <a>About</a>
            </Link>
            <Link href={ "/portfolios" }>
                <a>Portfolio</a>
            </Link>
        </div> );
    }
}

export default Header;