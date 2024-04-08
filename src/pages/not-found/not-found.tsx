import styles from './not-found.module.scss';
import SVG from './Vector.svg';

export const NotFound = () => {
    return (
        <main className={styles.main}>
            <h2 className={styles.message}>Opps ця сторінка не знайдена</h2>
            <h1 className={styles.error}>
                <img
                    className={styles.img}
                    src={SVG}
                    alt="heart rate"
                />
                404
            </h1>
            <a className={styles.link}>Повернутися на голову сторінку</a>
        </main>
    );
};
