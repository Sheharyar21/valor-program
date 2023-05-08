import NavLinks from './navLinks';
import {contactEmail} from '../../lib/globals';
import Button from '../Button';
import Link from 'next/link';

const NavDesktop = (props) => {
    return (
        <nav>
            <div className="container">
                <div className="nav__title">
                    <Link href="/">
                        <a title="VALOR Program">
                            <img src="/valor-logo.png" width="auto" height="80px" />
                        </a>
                    </Link>
                </div>
                <div>
                    <NavLinks />
                </div>
                <div className="nav__survey">
                    <a href="/" title="Start Survey">
                        <Button>Start Survey</Button>
                    </a>
                </div>
                <div className="nav__contact">
                    <strong>
                        Contact:{' '}
                        <a
                            href={`mailto:${contactEmail}`}
                            title={`Email: ${contactEmail}`}>
                            {contactEmail}
                        </a>
                    </strong>
                </div>
            </div>
            <style jsx>
                {`
                    nav {
                        background: #fff;
                        height: 80px;
                    }
                    .container {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        grid-gap: 5px;
                        max-width: 2100px;
                        margin: 0 auto;
                        padding: 0 15px;
                        height: 80px;
                    }
                    .container > div {
                        flex-basis: auto;
                    }
                    .nav__title {
                        display: flex;
                        align-items: flex-start;
                    }
                    .nav__title a {
                        font-family: var(--font-primary);
                        font-weight: 600;
                        font-size: 36px;
                        line-height: 14px;
                        color: #000;
                        text-decoration: none;
                        padding: 15px;
                    }

                    .nav__survey {
                        display: flex;
                        justify-content: center;
                    }
                `}
            </style>
        </nav>
    );
};
export default NavDesktop;
