import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import {useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/dash");
      })
      .catch((error) => {
        console.log(error);
        window.alert(`User account does not exist. Please try again!`)
      });
  };




  return (
   
    <div>
    <body>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <br />

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">

                            <div class="row">
                                
                                <div class="col-lg-6 d-none d-lg-block">
                                    <img width={"150%"} height={"150%"} src="https://media.istockphoto.com/id/1135341047/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=EsJEsevxVZujj_IU_nLz4tZcvmcXTy7sQt03bpfz3ZQ=" />
                                </div>
                              
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <br />

                                     
                                        <form class="user" onSubmit={signIn}>
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user" name='email' onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                placeholder="Enter Email Address" required />
                                            </div>

                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user" name='password' onChange={(e) => setPassword(e.target.value)}
                                                 value={password}
                                                placeholder="Enter Password" required />
                                                     
                                            </div>

                                            <center>
                                        <input type="submit" class="btn btn-outline-primary" value="Login"/ >
                                        </center>

                                        </form>
                                    
                                        <div  >
                                            {/* <center>
                                                <div>
                                                    <LoginSocialGoogle
                                                        client_id={"931012922196-inrp425t5a7gjgqeqinma7lguc0fssla.apps.googleusercontent.com"}
                                                        scope="openid profile email"
                                                        discoveryDocs="claims_supported"
                                                        access_type="offline"
                                                        onResolve={({ provider, data }) => {
                                                            console.log(provider, data);
                                                        }}
                                                        onReject={(err) => {
                                                            console.log(err);
                                                        }}
                                                    >
                                                        <GoogleLoginButton />
                                                    </LoginSocialGoogle>
                                                </div>
                                            </center> */}



                                        </div>
                                      
                                        <br />
                                        <br />
                                       
                                        <hr />

                                        <div class="text-center">
                                            <a class="small" href="/register">Create an Account!</a>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>


    </body>



</div>


  );
};

export default SignIn;