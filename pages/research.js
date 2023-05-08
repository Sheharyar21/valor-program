import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContentBlock from '../components/ContentBlock';
import Button from '../components/Button';
import Link from 'next/link';
import Head from 'next/head';

const ResearchPage = (props) => {
    return (
        <Layout>
            <Head>
                <title>Participating in Research</title>
                <meta name="title" content="Participating in Research" />
                <meta name="description" content="" />
            </Head>
            <Hero src="/hero-research.jpg" />
            <ContentBlock>
                <h1>Participating in Research</h1>
                <p>
                    Participants in the research studies conducted by the Veterans &
                    Active Duty Longitudinal Outcomes Research (VALOR) Program are
                    active-duty or separated members of the U.S. military who have
                    volunteered to provide information that can help us answer important
                    research questions. They may have served as active duty, Reserve, or
                    National Guard in any service branch of the U.S. military (Army,
                    Marine Corps, Navy, Air Force, and/or Coast Guard). Participants are
                    invited to enroll in certain research studies based on their
                    experiences and each study has different eligibility criteria.
                    Regardless of which study a participant is involved in, their answers
                    are completely confidential.
                </p>
                <p>
                    All members on the VALOR Program team respect the service and
                    sacrifice of our participants and are committed to doing research that
                    will contribute to active-duty service members’ lives.
                </p>
                <Link href="/wwrp">
                    <a title="Learn more about the Wounded Warrior RecoveryProject">
                        <Button>
                            Learn more about the Wounded Warrior RecoveryProject
                        </Button>
                    </a>
                </Link>
            </ContentBlock>
        </Layout>
    );
};
export default ResearchPage;
