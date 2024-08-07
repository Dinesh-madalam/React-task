import { useRef, useState } from "react";



function  UnControlled(){
    
    const emailRef = useRef();
    const passRef = useRef();
    const [error,setError] =useState(null);
    
    const submitHandler = (event) =>{
        event.preventDefault()
        const emailEntered =emailRef.current.value
        const passwrdEntered= passRef.current.value
        console.log(emailEntered,passwrdEntered);

        if(emailEntered.length && passwrdEntered.length<15){
            setError(null);
            successSubmit(emailEntered,passwrdEntered);
        }
        else{
            setError("Please Enter less than 15 Characters")
        }  
    }

    const successSubmit =async(username,password) => {
        try{
            const response =await fetch("https://dummyjson.com/auth/login",{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify({
                    username,
                    password,
                })
            })
            const finalResponse =await response.json();
            console.log(finalResponse,"Final Responce");
        } catch(err){

        }

    }
    return(
        <>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                    <input
                        type="text"
                        className="from-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailhelp"
                        ref={emailRef} />
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
                {error && <span>{error}</span>}

              <button type="submit" className="btn btn-primary"> Submit</button>

            </form>
        
        </>
    )
}

export default UnControlled;