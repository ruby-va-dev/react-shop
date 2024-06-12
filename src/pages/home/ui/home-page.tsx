import * as classes from './home-page.module.scss'
import ProfileIcon from '@/assets/images/icons/profile.svg'

export const HomePage = () => {
    return (
        <div>
            <h1 >Home Page</h1>
            <header className={classes.header}>
                <div className="container">
                    <div className={classes.headerTop}>
                        <div className={classes.headerTopPhone}>Available 24/7 at <a href="#">(405) 555-0128</a></div>
                        <nav className={classes.headerMenu}>
                            <ul className={classes.headerTopList}>
                                <li className={classes.headerTopItem}>
                                    <a className={classes.headerTopLink}
                                       href="#">Delivery & returns</a>
                                </li>
                                <li className={classes.headerTopItem}>
                                    <a className={classes.headerTopLink}
                                       href="#">Track order</a>
                                </li>
                                <li className={classes.headerTopItem}>
                                    <a className={classes.headerTopLink}
                                       href="#">Blog</a>
                                </li>
                                <li className={classes.headerTopItem}>
                                    <a className={classes.headerTopLink}
                                       href="#">Contacts</a>
                                </li>
                            </ul>
                        </nav>
                        <div className={classes.langSwitcher}>
                            <div className={classes.langSwitcherFlag}></div>
                            <div className={classes.langSwitcherContent}>
                                Eng / <span>$</span>
                            </div>
                        </div>
                        <div className={classes.headerAuth}>
                            <div className={classes.headerAuthIcon}>
                                <ProfileIcon/>
                            </div>
                            <button className={classes.headerAuthBtn}>Log in</button>
                            /
                            <button className={classes.headerAuthBtn}>Register</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
