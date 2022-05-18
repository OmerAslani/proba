import './Register.css';

const Registar  = () => {
    return(
        
        
            <div className="wrapper fadeInDown">
            <div id="formContent">
            
        
            
            <div className="fadeIn first">
                <h2>BeTogether</h2>
            </div>
        
            
            <form className="form-log">
                <input type="text" id="login" className="fadeIn second" name="name" placeholder="First name"></input>
                <input type="text" id="text" className="fadeIn third" name="login" placeholder="Last name"></input>
                <input type="text" id="email" className="fadeIn third" name="login" placeholder="Email"></input>
                <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password"></input>
                <input type="password" id="password" className="fadeIn third" name="login" placeholder="Confirm Password"></input>
                <input type="submit" className="fadeIn fourth" value="Create Account"></input>
            
            </form>
        
            
            <div id="formFooter">
                <a className="underlineHover" href="#">Log in</a>
            </div>
        
            </div>
        </div>
      
    )
}

export default Registar;