const Heading1 =(prop) => {
        console.log(prop);
    return ( <h1>{prop.data}</h1> )
};

export default Heading1;

export const Heading2 = (prop) => {
    return ( <h4>{`Number of cups : ${prop.data}`}</h4> )
};

export const Heading3 =() => {
    return <h3>Heading 3</h3>
};