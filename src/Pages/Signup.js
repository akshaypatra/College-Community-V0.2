import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    let history=useNavigate();

    const [credentials, setCredentials] = useState({name:"",email:"",password:"",confirmPassword:""});


    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        // eslint-disable-next-line
        const response = await fetch("http://localhost:4000/api/auth/createuser", {
            method: "POST",
      
            headers: {
              "Content-Type": "application/json"
              },
              body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}),
      
            
          });
        // eslint-disable-next-line
        const json=await response.json();
        console.log(json);
        if(json.success){
            //save the auth token and redirect
            
            localStorage.setItem('token',json.authToken);
            props.showAlert("Account created successfully ","success");
            history("/");
            

        }else{
            props.showAlert("Invalid Details","danger")
        }
}


    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div className='container'>
        <h1 style={{textAlign:"start",marginTop:"4vh"}}>Sign Up to use College Community</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 my-5">
        <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            value={credentials.name}
            aria-describedby="emailHelp"
            required
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            className="form-control"
            minLength={5}
            id="password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm password
          </label>
          <input
            
            type="password"
            name="confirmPassword"
            value={credentials.confirmPassword}
            onChange={onChange}
            className="form-control"
            id="confirmPassword"
            required
          />
        </div>
      
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup
