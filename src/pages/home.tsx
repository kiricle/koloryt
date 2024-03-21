import { HeroSection } from "../components/HeroSection/HeroSection";
import styles from "./home.module.scss"

export const Home = () => {
    return (
        <main className={styles.main}>
            <HeroSection />
        </main>
    );
};
