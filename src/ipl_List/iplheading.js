const IplHeading = (prop)=>{
    
    const {team="default"} = prop;
    return (<h2> Name of team : {team}</h2>);
 
}
export default IplHeading;