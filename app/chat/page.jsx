import styles from '../../styles/chat.module.css';
import { FaRobot } from 'react-icons/fa';


export default function ChatPage() {
    return (
        <div className={styles.beforeChatContainer}>
            <FaRobot className={styles.botIcon} />
            <h2 className={styles.appName}>AI Chat</h2>
            <p className={styles.question}>Any question?, start a conversation</p>
        </div>
    )
}
