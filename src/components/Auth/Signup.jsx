import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import {useNavigate } from "react-router-dom";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/dash");
            })
            .catch((error) => {
                console.log(error);
                window.alert(`Already have an account!`)
            });
    };

    return (
      

        <div class="container">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">

                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block" style={{
                            background: 'url("https://jamanetwork.com/imagelibrary/CollectionFeaturedImages/JamaNetwork/6258_patient-information.png")',
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}></div>
                        <div class="col-lg-6">

                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form onSubmit={signUp}>
                                 
                                    <input
                                        class="form-control form-control-user"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                    <br/>
                                    <input
                                        class="form-control form-control-user"
                                        type="password"
                                        pattern=".{6,}"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        
                                    > 
                                    </input>
                                    <br/>
                                    <center>
                                    <button className='btn btn-outline-primary' type="submit">Sign Up</button>
                                    </center>
                                </form>
                                <hr />

                                <div class="text-center">
                                    <a class="small" href="/">Already have an account? Login!</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>




    );
};

export default SignUp;