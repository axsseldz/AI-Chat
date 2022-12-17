import UserInput from "../components/UserInput";
import styles from '../styles/login.module.css';


export default function LogIn() {
  return (
    <di>
      <UserInput
        message='WELCOME BACK !!'
        route='/signup'
        buttonName='LOG IN'
        question='New here?'
        routeName='Sign up'
        pictureStyle={styles.loginPicture}
      />
    </di>
  )
}
