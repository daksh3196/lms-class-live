import styles from "../../styles/Header.module.scss";

const Header = () => {
    return(
        <div className={styles.header_div}> 
            <div className={styles.header_flex}>
                <div className={styles.app_item_logo_txt}>
                    <span>{process.env.APP_NAME}</span>
                </div>
                <div className={styles.app_profile}>
                    Default User
                </div>
            </div>
        </div>
    );
};

export default Header;