import UserInput from "../../components/UserInput";
import styles from '../../styles/login.module.css';

export default function SignUp() {
    return (
        <div>
            <UserInput
                route='/'
                question='Already have an account?'
                routeName='Log in'
                buttonName='SIGN UP'
                pictureStyle={styles.signupPicture}
                nameField={<input className={styles.inputField} placeholder='Name' />}
            />
        </div>
    )
}
