import "./Login.css";
function Login(){
    return(
        <div className="card login">
            <form action="" method="post">
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="email"  name="email" id="Email" placeholder="Enter your Email" />
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" id="Password" placeholder="Enter your Password" />
                </div>
                <div><button type="submit">Login</button></div>
            </form>
        </div>
    );
}

export default Login;