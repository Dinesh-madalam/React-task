import { useRef, useState } from "react"

function SamsungForm () {
    const emailRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()
    const modelRef = useRef()
    const imeiRef = useRef()
    const issuesRef = useRef()

    const [error, setError] = useState(null)

    const [ui, setUi] = useState(true)

    function submitHandler(event) {
        event.preventDefault()
        const userEnteredEmail = emailRef.current.value
        const userEnteredName = nameRef.current.value
        const userEnteredPhone = phoneRef.current.value
        const userEnteredModel = modelRef.current.value
        const userEnteredImei = imeiRef.current.value
        const userEnteredIssue = issuesRef.current.value


        if(/Samsung/ig.test(userEnteredModel) &&
            userEnteredEmail.length>0 &&
            userEnteredName.length>0 &&
            userEnteredPhone.length>0 &&
            userEnteredImei.length>0 &&
            userEnteredIssue.length>0
        ){
            // console.log("success")

            emailRef.current.value = ""
            nameRef.current.value = ""
            phoneRef.current.value = ""
            modelRef.current.value = ""
            imeiRef.current.value = ""
            issuesRef.current.value = ""

            setError(null)

            setUi(false)
        }
        else{


            emailRef.current.value = ""
            nameRef.current.value = ""
            phoneRef.current.value = ""
            modelRef.current.value = ""
            imeiRef.current.value = ""
            issuesRef.current.value = ""


            setError("Something went wrong")
        }
    }

    const goBackHandler = () => {
        setUi(true)
    } 


    return (
        <>
            {ui ? <form  onSubmit={submitHandler}>
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
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        ref = {nameRef}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail3" className="form-label">
                        Phone number
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="exampleInputEmail3"
                        aria-describedby="emailHelp"
                        ref={phoneRef}

                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your phone number with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail4" className="form-label">
                        Model
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="exampleInputEmail4"
                        aria-describedby="emailHelp"
                        ref={modelRef}

                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your phone number with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail5" className="form-label">
                        IMEI
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="exampleInputEmail5"
                        aria-describedby="emailHelp"
                        ref={imeiRef}

                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your phone number with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail6" className="form-label">
                        Comment Issue
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleInputEmail6"
                        aria-describedby="emailHelp"
                        ref={issuesRef}
                        rows={6}
                        cols={30}

                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your phone number with anyone else.
                    </div>
                </div>
                {error && <div>{error}</div>}
                <button type="submit" className="btn btn-primary" on>
                    Submit
                </button>
            </form>:
            <>
            <h1>Your Application is Successfully Submitted</h1>
            <button 
            onClick={goBackHandler}
            style={{backgroundColor: "whitesmoke"}}>Submit Another Application</button>
            </>
            }
        </>
    );
}


export default SamsungForm;