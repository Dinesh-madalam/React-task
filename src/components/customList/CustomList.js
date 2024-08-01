const CustomList = ({ list }) => {
    return (
        <ul>
            {
                list.map((eachitem)=> (
                <li>{eachitem}</li>
            ))}
        </ul>
    )
}

export default CustomList ;