import React from "react";
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";


const Signup = ({username, email, password, phonenumber}) => {

const newUser = async () => {

    const user = {
        username: document.querySelector('.username').value,
        email: document.querySelector('.email').value,
        password: document.querySelector('.password').value,
        phonenumber: document.querySelector('.phonenumber').value,
    }
     await fetch('https://shopbeta-api.onrender.com/users', {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            'Accept' : 'application/json, text/plain',
        },
        body: JSON.stringify(user)       
    })
    .then((res) => res.json())
    .then((data) => window.localStorage.setItem("token", data.token))
    .then((data) => window.localStorage.setItem("meId", data.user._id))
    .catch((err) => {
        console.log(`Couldn't register new user`)
    })
}

const token = localStorage.getItem("token")
const me = localStorage.getItem("meId")

console.log(token)
console.log(me)

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();

  const data = { username, email, password, phoneNumber };

  try {
    const response = await fetch('https://shopbeta-api.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);
    window.localStorage.setItem("token", result.token)
    window.localStorage.setItem("meId", result._id)
  } catch (error) {
    console.error(error);
  }
};


        return(
            <div className="">
                <Preloader />
                    <div className="tc">
                      <div style={{width: '360px'}} className="dib pa3 tc">
                        {/* <div className="pv3">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv2 fw6 tc"><small className="orange f4">Welcome</small><br/> It only takes a <small className="green f4">few seconds</small> to create your account</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Username</p>
                                        <small className="icon-user f4 fw5"></small>
                                        <input type="text" name="username" value={username} className="username br3 ba pa3 w-100" placeholder="Type in username..." required />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Phone Number</p>
                                        <small className="icon-phone f4 fw5"></small>
                                        <input type="tel" name="phonenumber" value={phonenumber} className="phonenumber br3 ba pa3 w-100" placeholder="Input phone number..." required />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Email</p>
                                        <small className="icon-envelope f4 fw5"></small>
                                        <input type="email" name="email" value={email} className="email br3 ba pa3 w-100" placeholder="Your email..." required autoComplete="email" />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Password</p>
                                        <small className="icon-lock f4 fw5"></small>
                                        <input type="password" value={password} name="password" className="password br3 ba pa3 w-100" placeholder="password..." required autoComplete="current-password" />
                                    </div>
                                    <div className="tl pv2">
                                        <input name="check" id="exampleCheck" type="checkbox" className="pr2" required /><label for="exampleCheck" className="form-check-label ph2">Accept our <a href="https://shopbetaonline.onrender.com/terms of use.html">Terms and Conditions</a>.</label>
                                    </div>
                                    <p className="tr"><small className="ph2">Already have an account?</small>
                                        <Link className="link" to={"/assets/indexes/Login"}><small className="hover-blue orange f5 fw4 pointer">Login</small></Link>
                                    </p>
                                    <div>
                                        <div className="pv2">
                                            <div className="pv2">
                                                <Link className="link" to={"/assets/indexes/NewAccount"}>
                                                    <p className="tc">
                                                        <button type="submit" className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph6 ma1 grow pv3 b fw6">Signup</button>
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone number:</label>
        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required />
      </div>
      <button type="submit">Create User</button>
    </form>
                        </div>
                    </div>
                </div>
    );
}

export default Signup;