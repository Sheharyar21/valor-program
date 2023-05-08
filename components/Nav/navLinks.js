import React from 'react';
import Link from 'next/link';
import {BREAKPOINT} from '../../lib/styles';

const NavLinks = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link href="/">
                        <a title="Home">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a title="About">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/our-team">
                        <a title="Team">Team</a>
                    </Link>
                </li>
                <li>
                    <Link href="/publications">
                        <a title="Publications">Publications</a>
                    </Link>
                </li>
                <li>
                    <Link href="/wwrp">
                        <a title="For Participants">For Participants</a>
                    </Link>
                </li>
                <li>
                    <Link href="/research">
                        <a title="Research">Research</a>
                    </Link>
                </li>
                <li>
                    <Link href="/resources">
                        <a title="Resources">Resources</a>
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        <a title="FAQs">FAQs</a>
                    </Link>
                </li>
            </ul>
            <style jsx>
                {`
                    ul {
                        display: block;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    li {
                        text-align: center;
                        position: relative;
                        border-bottom: 1px solid var(--gray-200);
                    }
                    a {
                        font-weight: 600;
                        padding: 20px 15px;
                        display: block;
                        width: 100%;
                        font-size: 16px;
                        text-decoration: none;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        ul {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                        li {
                            padding: 0;
                            border-bottom: none;
                        }
                        a {
                            text-decoration: none;
                            font-size: 14px;
                            width: 100%;
                            margin: 0;
                        }
                    }
                `}
            </style>
        </React.Fragment>
    );
};
export default NavLinks;
