import './authentication.styles.scss'
import SignUp from "../../sign-up/sign-up-form";
import SignIn from "../../sign-in/sign-in-form";

const Authentication = () => {



    return(
        <div className="authentication-container">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Authentication;