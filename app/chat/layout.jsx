import SideBar from "../../components/SideBar";
import styles from '../../styles/sidebar.module.css';

export default function ChatLayout({ children }) {

    return (
        <html>
            <head />
            <body className={styles.chatContainer}>
                <SideBar />
                {children}
            </body>
        </html>
    )
}
