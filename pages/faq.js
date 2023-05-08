import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContentBlock from '../components/ContentBlock';
import Link from 'next/link';
import FaqCard from '../components/FaqCard';
import {contactEmail, phoneNumber} from '../lib/globals';
import Head from 'next/head';

const FaqPage = (props) => {
    return (
        <Layout>
            <Head>
                <title>FAQs</title>
                <meta name="title" content="FAQs" />
                <meta name="description" content="" />
            </Head>
            <Hero src="/hero-faqs.jpg" />
            <ContentBlock>
                <h1>FAQs</h1>
                <FaqCard number="1" question="What does VALOR do?">
                    <p>
                        What does VALOR do? The VALOR program conducts multidisciplinary
                        research on the physical and psychological outcomes of warfighters
                        throughout their lifetime. Through our research, we aim that
                        influence health policies on screening, prevention, and
                        intervention practices that improve quality of life, wellness,
                        readiness, and performance of active-duty service members and
                        veterans. Additional information about current VALOR projects can
                        be found{' '}
                        <Link href="/research">
                            <a title="Our Research">on our Reseach Page.</a>
                        </Link>
                    </p>
                </FaqCard>
                <FaqCard number="2" question="What do we use your information for?">
                    <p>
                        The VALOR Program is a team of researchers who contribute to
                        multiple research projects focused on active-duty service members
                        and veterans. For more information, please see{' '}
                        <Link href="/our-team">
                            <a title="Our Team">Our Team page.</a>
                        </Link>
                    </p>
                </FaqCard>
                <FaqCard number="3" question="Why was I selected to participate?">
                    <p>
                        Active-duty service members and veterans are invited to
                        participate based on eligibility criteria of each study. The
                        information that they share will be used to optimize care for
                        service members and veterans. For more information, please see the
                        Participants page.
                    </p>
                </FaqCard>
                <FaqCard number="4" question="Does the VALOR accept volunteers?">
                    <p>
                        Does the VALOR program accept volunteers. Yes, we are currently
                        accepting volunteers for the Wounded Warrior Recovery Project
                        (WWRP). Current or former service members that would like to
                        participate and have not yet been invited may submit their
                        information to determine if they are eligible for any of our
                        ongoing studies. For more information, please visit the
                        [Volunteers page]
                    </p>
                </FaqCard>
                <FaqCard number="5" question="How do I login?">
                    <p>
                        How do I log in? You can enter your study number and unique
                        password at our log in page [link to log in]. There, you will be
                        taken directly to your survey.
                    </p>
                </FaqCard>
                <FaqCard
                    number="6"
                    question="What is being asked of me as a participant?">
                    <p>
                        Requirements vary by study and will be described to you before you
                        enroll. If you have any questions you can always reach out to the
                        VALOR Program team for more information.
                    </p>
                </FaqCard>
                <FaqCard
                    number="7"
                    question="How safe is my information if I choose to participate in a VALOR Program study?">
                    <p>
                        We take the safety and security of our participants and their
                        information very seriously. As with all research studies, there is
                        a small risk that some of the personal information of our
                        participants, including answers to survey questions or email
                        addresses, could be compromised. Considerable data-protection
                        safeguards are in place to minimize any compromise of participant
                        data. All data is stored on secure servers in a secure facility,
                        and any data transferred is encrypted according to Department of
                        Defense (DoD) regulations and in line with industry standards. All
                        security procedures meet or exceed DoD standards for the handling
                        and storage of protected health information. The only personnel
                        that have access to this data are a limited group of authorized
                        researchers. Randomly created identification numbers are used
                        instead of names. Each person that has any access to protected
                        health information has been specially trained in the management of
                        protected health information and has signed documents which commit
                        them to protecting protected health information.
                    </p>
                    <p>
                        To further help us protect participant privacy, we have obtained a
                        Certificate of Confidentiality from the U.S. Department of Health
                        and Human Services (DHHS). With this certificate, we cannot be
                        forced to disclose information that may identify participants in
                        any federal, state, local, civil, criminal, legislative,
                        administrative, or other proceeding. We will use the certificate
                        to resist any demands for information that would identify a
                        participant, except to prevent serious harm to the participant or
                        others. A Certificate of Confidentiality does not prevent a
                        participant from voluntarily releasing information about
                        themselves or their involvement in the study. A Certificate of
                        Confidentiality does not represent an endorsement of the study by
                        the DHHS or the National Institutes of Health.
                    </p>
                </FaqCard>
                <FaqCard number="8" question="How can I contact the VALOR Program?">
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
                        <li>
                            For more information, please see the{' '}
                            <Link href="/contact-us">
                                <a title="Contact Us"> Contact Us page.</a>
                            </Link>
                        </li>
                    </ul>
                </FaqCard>
                <FaqCard number="9" question="How can I opt out of further contact?">
                    <p>
                        To opt-out of the study or any further contact, please send an
                        email with your study number to{' '}
                        <a
                            href={`mailto:usn.valorprogram@mail.mil`}
                            title={`Email: usn.valorprogram@mail.mil`}>
                            usn.valorprogram@mail.mil
                        </a>
                        .
                    </p>
                </FaqCard>
            </ContentBlock>
        </Layout>
    );
};
export default FaqPage;
