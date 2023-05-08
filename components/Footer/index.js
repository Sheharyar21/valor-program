import ImageBlock from '../ImageBlock';
import React from 'react';
import FooterLinks from './footerLinks';
import {BREAKPOINT} from '../../lib/styles';

const Footer = (props) => {
    return (
        <footer>
            <ImageBlock src="/footer.jpg" />
            <div className="footer__container">
                <div className="footer__inner">
                    <div>
                        <FooterLinks />
                    </div>
                    <div>
                        <p>
                            <strong>Emergency Resources</strong>
                        </p>
                        <div className="footer__services">
                            <div>
                                <p>
                                    Psychological Health Center of Excellence 24/7
                                    Resource Center
                                </p>
                                <p>1-866-966-1020</p>
                                <p>
                                    Email:{' '}
                                    <a
                                        href="mailto:resources@dcoeoutreach.org"
                                        title="Email: resources@dcoeoutreach.org">
                                        resources@dcoeoutreach.org
                                    </a>
                                </p>
                                <p>
                                    <a href="/" title="">
                                        More info/Live chat
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p>Veterans Crisis Line</p>
                                <p>1-800-273-8255</p>
                                <p>Text: 838255</p>
                                <p>
                                    <a href="/" title="">
                                        More info/Live chat
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    footer {
                        background: #eaeaea;
                        width: 100%;
                        position: relative;
                        bottom: 0;
                    }

                    p {
                        margin-bottom: 5px;
                        line-height: 32px;
                        color: #495057;
                    }
                    p strong {
                        color: #000;
                    }
                    .footer__container {
                        max-width: 1110px;
                        margin: 0 auto;
                    }

                    .footer__inner {
                        display: block;
                        padding: 30px 20px;
                        border-bottom: 2px solid #dee2e6;
                    }
                    .footer__inner > div {
                        margin-bottom: 20px;
                    }
                    .footer__services {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .footer__inner {
                            display: flex;
                            grid-gap: 40px;
                            padding: 75px 0 30px 0;
                        }
                        .footer__inner > div:nth-child(1) {
                            flex: 1;
                        }
                        .footer__inner > div:nth-child(2) {
                            flex: 2;
                        }
                        .footer__services {
                            display: flex;
                            justify-content: space-between;
                        }
                        .footer__services > div {
                            max-width: 360px;
                        }
                    }
                `}
            </style>
        </footer>
    );
};
export default Footer;
