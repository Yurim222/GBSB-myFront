import styles from "./modal.module.scss"

const RandomModal = (props) => {

    const { open, close } = props;

    return(
        <div>
            { open ? (
                <div className={styles.modalContainer}>
                    <div className={styles.bodyContainer}>
                        <div className={styles.titleContainer}>
                        </div>
                        <div className={styles.contentContainer}>
                            <div className={styles.articleContainer}>
                                <p>챌린지 소개</p>
                            </div>
                            <div className={styles.articleContainer}>
                                <p>챌린지 방법</p>                        
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.closeButton} onClick={close}>닫기</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default RandomModal;