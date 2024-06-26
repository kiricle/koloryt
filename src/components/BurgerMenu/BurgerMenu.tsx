import { useState } from 'react';
import styles from './BurgerMenu.module.scss';
// import { links } from '../../utils/links';
import { Link } from '@tanstack/react-router';

const links = [
    { name: 'Колекції', href: '/collection' },
    { name: 'Нові надходження', href: '/' },
    { name: 'Всі колекції', href: '/' },
    { name: 'Знижки', href: '/' },
    { name: 'Про нас', href: '/' },
    { name: 'Контакти', href: '/' },
];

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.burger_container}>
            <button
                className={[styles.burger, isOpen && styles.button_open].join(
                    ' '
                )}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </button>

            <nav
                className={[styles.menu, isOpen && styles.menu_open].join(' ')}
            >
                <div className={styles.logo_container}>
                    <button
                        className={[
                            styles.burger,
                            isOpen && styles.button_open,
                        ].join(' ')}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                        <div className={styles.bar3}></div>
                    </button>
                </div>

                {links.map(({ href, name }) => (
                    <Link
                        key={name}
                        className={styles.link}
                        to={href}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};
