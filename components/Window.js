import styles from "./Window.module.css";

export default(props) => {
    return (
        <div className={styles.windowContainer}>
            <div id="windowComponentNav" className={styles.windowNav}>
                <span className={styles.dot} style={{background: "#ED594A"}}></span>
                <span className={styles.dot} style={{background: "#FDD800"}}></span>
                <span className={styles.dot} style={{background: "#5AC05A"}}></span>
            </div>

            <div id="windowComponentContent" className={styles.windowContent}>
                {props.children}
            </div>
        </div>
    )
}