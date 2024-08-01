import React from  "react";

const Greeting = (prop) => {
    return ( 
    <React.Fragment>
        <h4> Good morning {prop.children}</h4>
        <h3>july 17th is Holiday on account of Muharram </h3>
        

    </React.Fragment>
    );
}

export default Greeting;