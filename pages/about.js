import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContentBlock from '../components/ContentBlock';
import ImageBlock from '../components/ImageBlock';
import Head from 'next/head';

const AboutPage = (props) => {
    return (
        <Layout>
            <Head>
                <title>Mission</title>
                <meta name="title" content="Mission" />
                <meta name="description" content="" />
            </Head>
            <Hero src="/hero-about.jpg" />
            <ContentBlock>
                <h1>Mission</h1>
                <p>
                    The Veteran & Active Duty Longitudinal Outcomes Research (VALOR)
                    Program conducts multidisciplinary research on physical and
                    psychological outcomes of warfighters throughout their lifetime.
                    Through our research, and the contributions of our participants, we
                    aim to share findings that influence health policies on screening,
                    prevention, and intervention practices. Our ultimate goal is to
                    contribute to improved quality of life, wellness, readiness, and
                    performance of active-duty service members and veterans.
                </p>
            </ContentBlock>
            <ImageBlock src="/about-image-1.jpg" />
            <ContentBlock>
                <h2> About the VALOR Program</h2>
                <p>
                    The VALOR Program is a research division in the Operational Readiness
                    Directorate at the Naval Health Research Center (NHRC) in San Diego,
                    CA. The VALOR team consists of psychologists, epidemiologists, and
                    research administrators (see Our Team for more information) who
                    contribute to multiple research projects focused on active-duty and
                    veteran service members.
                </p>
            </ContentBlock>
            <ImageBlock src="/about-image-2.jpg" />
            <ContentBlock>
                <h2> Our Research</h2>
                <p>
                    The research goals of the VALOR Program are to address knowledge gaps
                    in health-related outcomes among active-duty service members and
                    veterans to help healthcare providers and researchers improve overall
                    care. The VALOR Program has contributed to research related to
                    deployment-related injury, including extremity injuries and traumatic
                    brain injury (TBI), posttraumatic stress disorder (PTSD) and other
                    mental health concerns, pain, and other physical health outcomes.
                </p>
                <p>
                    The VALOR Program’s largest project to date is the Wounded Warrior
                    Recovery Project (WWRP), the Navy Bureau of Medicine and Surgery
                    (BUMED) under the Wounded, Ill, and Injured (WII) program. The goal of
                    the WWRP is to learn about the long-term outcomes of U.S. military
                    personnel injured on deployment. Little is known about how different
                    injuries affect the overall quality of life of injured military
                    personnel, especially in the long term.
                </p>
            </ContentBlock>
        </Layout>
    );
};
export default AboutPage;
