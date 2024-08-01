const IplImages = (props) =>{
    const {source,alt,width,height}=props;
    return (
        <img src={source} 
        alt={alt} 
        width={width} 
        height={height} ></img>
    )
}
export default IplImages;