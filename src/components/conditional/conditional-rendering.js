const ConditionalRendering = () => {
    const islogin = true;
    const isAdmin = false;
    return (
    <>
        {islogin ? (
        <>
            {
                isAdmin ? (
                <>
                    <h2>Welcome Admin</h2>
                </>
                ) : (
                <>
                    <h2>Welcome User </h2>                       
                </>)
            }
        </>
        ) : (
            <>
                <h2>Please Login</h2>
            </>)}
    </>)
     
}
export default ConditionalRendering;


// const ConditionalRendering = () => {
//     const islogin = true;
//     const isAdmin = false;
//     if(islogin){
//         if(isAdmin){
//             return <>
//         <h2>Welcome Admin</h2>
//         </>
//         } else {
//             return <>
//             <h2>Welcome User</h2>
//             </>
//         }   
//     } else {
//         return <>
//         <h2>Please Login</h2>
//         </>
//     } 
// }
// export default ConditionalRendering;


