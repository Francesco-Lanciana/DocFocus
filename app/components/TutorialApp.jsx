import React from 'react';
import Nav from 'Nav';


export var Test = (props) => {
    return (
        <div>
            <Nav/>
            <h1 className="page-title">Todo App</h1>
            <div className="row">
                <div className="columns large-5 medium-6 small-11 small-centered">
                    <div className="container">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;