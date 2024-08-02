
const IplImage = (prop)=>{
    const {source,alternate,width,height} = prop;
    console.log(source,alternate,width,height)
    return(
        <img   src ={source}
        alt = {alternate}
        width={width}
        height={height} />
    )
}

export default IplImage;