import React from 'react';
import Link from 'next/link';
import {BREAKPOINT} from '../../lib/styles';

const FooterLinks = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link href="/">
                        <a title="Home">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/wwrp">
                        <a title="For Participants">For Participants</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a title="About">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/resources">
                        <a title="Resources">Resources</a>
                    </Link>
                </li>
                <li>
                    <Link href="/publications">
                        <a title="Publications">Publications</a>
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        <a title="FAQs">FAQs</a>
                    </Link>
                </li>
                <li>
                    <Link href="/our-team">
                        <a title="Team">Team</a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                a {
                    font-size: 14px;
                    font-weight: bold;
                    text-decoration: none;
                }
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    max-height: 160px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    a {
                        font-size: 16px;
                    }
                }
            `}</style>
        </React.Fragment>
    );
};
export default FooterLinks;
