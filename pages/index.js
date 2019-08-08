import React, { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";

class Index extends Component{
    render(){
        return ( <div>
            <h2>Portfolios page from class component.</h2>
            <Header title={ "I am a header component" }>
                <h1>I am a header subtitle</h1>
            </Header>
        </div> );
    }
}

export default Index;