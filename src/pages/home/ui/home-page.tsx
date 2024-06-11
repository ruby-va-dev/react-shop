import * as classes from './home-page.module.scss'
import ProfileIcon from '@/assets/images/icons/profile.svg'

export const HomePage = () => {
    return (
        <div>
            <h1 >Home Page</h1>
            <header className={classes.header}>
                <div className="container">
                    <div className="headerTop">
                        <div className="headerTopPhone"></div>
                        <nav className="headerMenu">
                            <ul className="headerTopList">
                                <li className="headerTopItem">
                                    <a className="headerTopLink"
                                       href="#">Delivery & returns</a>
                                </li>
                                <li className="headerTopItem">
                                    <a className="headerTopLink"
                                       href="#">Track order</a>
                                </li>
                                <li className="headerTopItem">
                                    <a className="headerTopLink"
                                       href="#">Blog</a>
                                </li>
                                <li className="headerTopItem">
                                    <a className="headerTopLink"
                                       href="#">Contacts</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="langSwitcher">
                            <div className="langSwitcherFlag"></div>
                            <div className="langSwitcherContent">
                                Eng / <span>$</span>
                            </div>
                        </div>
                        <div className="headerAuth">
                            <div className="headerAuthIcon">
                                <ProfileIcon/>
                            </div>
                            <button className="headerAuthBtn">Log in</button>
                            /
                            <button className="headerAuthBtn">Register</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
