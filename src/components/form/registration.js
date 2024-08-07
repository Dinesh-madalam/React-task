import { useRef, useState } from "react";

function RegistrationForm () {
    const emailRef = useRef()
    const passRef = useRef()
    const phoneRef = useRef()
    const [error, setError]= useState(null)

    const [usersData, setUsersData] = useState([])

    const submitHandler = (event) => {
        event.preventDefault()
        const userEnteredEmail = emailRef.current.value
        const userEnteredPassword = passRef.current.value
        const userEnteredPhone = phoneRef.current.value
        // console.log(emailRef.current.value)

        if(userEnteredEmail.length<15 && 
            userEnteredEmail.length>0 && 
            userEnteredPassword.length<15 && 
            userEnteredPassword.length>0 && 
            userEnteredPhone.length==10){
            setError(null)
            emailRef.current.value = ""
            passRef.current.value = ""
            phoneRef.current.value = ""
            // console.log("success")

            const singleUser = {
                userEnteredEmail,
                userEnteredPassword,
                userEnteredPhone
            }  

            const updatedUsersData = [...usersData, singleUser]

            storageHandler(updatedUsersData)

        }
        else{
            setError("The above entered credentials are not acceptable")   
        }
    }


    const storageHandler = (totalUsers) => {
        window.localStorage.setItem("users", JSON.stringify(totalUsers))
    }

    return (
        <>
            <form onSubmit={submitHandler} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        ref={emailRef}

                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        ref = {passRef}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">
                        Phone number
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="exampleInputEmail2"
                        aria-describedby="emailHelp"
                        ref={phoneRef}

                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your phone number with anyone else.
                    </div>
                </div>
                {error && <div>{error}</div>}
                <button type="submit" className="btn btn-primary" on>
                    Submit
                </button>
            </form>

        </>
    );
}

export default RegistrationForm