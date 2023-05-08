import Layout from '../components/Layout';
import ContentBlock from '../components/ContentBlock';
import Publications from '../components/Publications';
import Hero from '../components/Hero';
import ImageBlock from '../components/ImageBlock';
import Head from 'next/head';
import Privacy from '../components/Privacy';

const HomePage = () => {
    return (
        <Layout>
            <Head>
                <title>Valor Program</title>
                <meta name="title" content="Valor Program" />
                <meta name="description" content="" />
            </Head>
            <Hero src="/hero-home.jpg" />
            <ContentBlock>
                <div className="section__intro">
                    <h1>Welcome to the VALOR Program</h1>
                    <p>
                        The Veteran & Active Duty Longitudinal Outcomes Research (VALOR)
                        Program is a research division at the Naval Health Research Center
                        in San Diego, CA. Our research focuses on topics relevant to the
                        well-being of active-duty service members and veterans with the
                        goal of helping to improve wellness, readiness, and quality of
                        life.
                    </p>
                </div>
            </ContentBlock>
            <ImageBlock src="/home-image-1.jpg" />
            <div>
                <ContentBlock>
                    <div className="section__news">
                        <h2>News</h2>
                        <Publications max={2} />
                    </div>
                </ContentBlock>
            </div>
            <Privacy />
        </Layout>
    );
};
export default HomePage;
