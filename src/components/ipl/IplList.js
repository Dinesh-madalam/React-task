const IplList = (props) => {
    //  const [name,captain,logo]=props
     const ipl= [{id:1,name:"Ms dhoni",t_name:"csk"},
        {id:2,name:"Virat Kohli",t_name:"RCB"},{id:3,name:"SKY",t_name:"MI"}
     ]
    return (
        <div>
            <table>
                <th>
                    <tr>
                        <td>Id</td>
                        <td>name</td>
                        <td>t_name</td>
                    </tr>
                </th>
                {ipl.map((names)=>(
                    <tr>
                        <td> {names.id} </td>
                        <td> {names.name} </td>
                        <td> {names.t_name} </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default IplList;

