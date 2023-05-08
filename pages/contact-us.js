import Layout from '../components/Layout';
import ContentBlock from '../components/ContentBlock';
import {contactEmail, phoneNumber} from '../lib/globals';
import Head from 'next/head';

const ContactUs = (props) => {
    return (
        <Layout>
            <Head>
                <title>Contact Us</title>
                <meta name="title" content="Contact Us" />
                <meta name="description" content="" />
            </Head>
            <ContentBlock>
                <h1>Contact Us</h1>
                <ul>
                    <li>
                        Please e-mail us at{' '}
                        <a
                            href={`mailto:${contactEmail}`}
                            title={`Email: ${contactEmail}`}>
                            {contactEmail}
                        </a>
                    </li>
                    <li>
                        We can be reached toll-free via telephone at:{' '}
                        <a href={`tel:${phoneNumber}`} title={`Call: ${phoneNumber}`}>
                            {phoneNumber}
                        </a>
                    </li>
                </ul>
            </ContentBlock>
        </Layout>
    );
};
export default ContactUs;
