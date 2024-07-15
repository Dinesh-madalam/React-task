import CustomImage from "../image/image"

const Profile = ( ) => {
    const profiledetails= {
        name :"Dinesh",
        phn_no: 2001,
        salary : 35000
    }
    const {name,phn_no,salary}=profiledetails
    return (
        <div>
          <h2>my name is {name}</h2>
          <h2>my phn_no is {phn_no}</h2>
          <h2>my salary is {salary}</h2>
        </div>
    )
}

export default Profile;