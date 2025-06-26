import "./Login.css";
function Signup(){
    return(
        <div className="card login">
            <form action="" method="post">
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text"  name="name" id="Name" placeholder="Enter your Name" />
                </div>
                <div>
                    <label htmlFor="Phono">Phone Number</label>
                    <input type="text"  name="phono" id="Phono" placeholder="Enter your Phone Number" />
                </div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="email"  name="email" id="Email" placeholder="Enter your Email" />
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" id="Password" placeholder="Enter your Password" />
                </div>
                <div>
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="Repeat your Password" />
                </div>
                <div><button type="submit">Sign up</button></div>
            </form>
        </div>
    );
}

export default Signup;