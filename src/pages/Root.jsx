import classes from '../resources/css/root.module.css';

import { NavLink, Outlet } from 'react-router-dom';

import { useState, createContext } from 'react';

export const LanguageContext = createContext();

function Root () {

    const [lang, setLang] = useState(true); // true for English, false for German

    const toggleLanguage = () => {
        setLang(prevLang => !prevLang);
    }  

    return (
        <LanguageContext.Provider value={lang}>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <NavLink
                    to='/'
                    className={({ isActive }) => `${classes.navLink} ${isActive ? classes.active : ''}`}>
                        {lang ? 'Home' : 'Startseite'}
                    </NavLink>
                    { lang ? (
                        <>
                            <NavLink
                            to='about-the-artist'
                            className={({ isActive }) => `${classes.navLink} ${isActive ? classes.active : ''}`}>
                                About the Artist
                            </NavLink>
                            <NavLink
                            to='contact'
                            className={({ isActive }) => `${classes.navLink} ${isActive ? classes.active : ''}`}>
                                Contact
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                            to='ueber-die-kuenstlerin'
                            className={({ isActive }) => `${classes.navLink} ${isActive ? classes.active : ''}`}>
                                Über die Künstlerin
                            </NavLink>
                            <NavLink
                            to='kontakt'
                            className={({ isActive }) => `${classes.navLink} ${isActive ? classes.active : ''}`}>
                                Kontakt
                            </NavLink>
                        </>
                    )}
                </nav>
                <button 
                className={classes.languageButton}
                onClick={toggleLanguage}>
                    { lang ? 'EN' : 'DE' }
                </button>
                <div className={classes.title}>
                    <div className={classes.titleDeco}>
                        <div className={`${classes.light} ${classes.banner}`}>
                        </div>
                        <div className={`${classes.medium} ${classes.banner}`}>
                        </div>
                        <div className={`${classes.dark} ${classes.banner}`}>
                        </div>
                    </div>
                    <h1>
                        ArtFlo
                    </h1>
                </div>
            </header>
            <main className={classes.main}>
                <Outlet />
            </main>
        </LanguageContext.Provider>
    )
}

export default Root;