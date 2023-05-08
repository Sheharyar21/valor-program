import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContentBlock from '../components/ContentBlock';
import TeamCard from '../components/TeamCard';
import Head from 'next/head';

const TeamPage = (props) => {
    return (
        <Layout>
            <Head>
                <title>Our Team</title>
                <meta name="title" content="Our Team" />
                <meta name="description" content="" />
            </Head>
            <Hero src="/hero-team.jpg" />
            <ContentBlock>
                <h1>Our Team</h1>
                <TeamCard
                    image="/team/michael-r.jpg"
                    title="Michael R. Galarneau, M.S., N.R.E.M.T.">
                    <p>
                        I am Mike Galarneau, Director of Operational Readiness at Naval
                        Health Research Center (NHRC) and the senior principal
                        investigator for the Wounded Warrior Recovery Project (WWRP).
                    </p>
                    <p>
                        I am a U.S. federal employee and have worked as an NHRC researcher
                        since 1995. My background includes statistics and experimental
                        design, with a Master of Science in Industrial Organizational
                        Psychology. I am also a nationally-, state-, and county-registered
                        emergency medical technician. As the senior principal investigator
                        for WWRP, I oversee the scientific and administrative aspects of
                        the project. Since 9/11, more than 52,000 U.S. service members
                        have been injured during deployment, many with severe,
                        life-altering conditions. WWRP was established to see just how
                        well our wounded service members are doing over the long haul,
                        with the objective being to identify those therapies,
                        rehabilitation programs, services, and support systems that
                        actually make the biggest impact on ultimate quality of life.
                    </p>
                    <p>
                        I have received two patents for my work at Naval Health Research
                        Center (U.S. Patent No. 5,995,077, 1999 and U.S. Patent No.
                        7,707,042, 2010) and am the recipient of the Navy Meritorious
                        Civilian Service Award.
                    </p>
                </TeamCard>
                <TeamCard image="/team/jessica-r.jpg" title="Jessica R. Watrous, Ph.D.">
                    <p>
                        I am a clinical health psychologist, division head of the VALOR
                        Program, and the co-principal investigator for the Wounded Warrior
                        Recovery Project (WWRP).
                    </p>
                    <p>
                        I received my Ph.D. in clinical psychology from the University of
                        Memphis, and completed my clinical internship and postdoctoral
                        fellowship at the VA San Diego Healthcare System and University of
                        California, San Diego. My research and clinical work has primarily
                        focused on assessing and helping people change health behaviors
                        like substance use, physical activity, and healthful eating to
                        improve quality of life as well as mental and physical health.
                    </p>
                    <p>
                        Much of my career has been dedicated to working with military
                        personnel and veterans with the aim of understanding their unique
                        circumstances and supporting them in living their best lives. In
                        addition to a deep sense of responsibility to our nation's
                        military and veterans, many of my family members and close friends
                        have served, making my work of personal interest as well.
                    </p>
                </TeamCard>
                <TeamCard title="Cameron T. McCabe, PhD" image="/team/cameron-t.jpg">
                    <p>
                        I am a research psychologist, and I've been a member of the team
                        since early 2016. Before joining the VALOR Program, I received my
                        Ph.D. in applied psychology from Portland State University.
                    </p>
                    <p>
                        My research broadly focuses on health, well-being, and
                        interpersonal relationships, and how understanding these issues
                        can help improve our service members' lives and experience. As a
                        researcher, I'm a firm believer that the work we do should be
                        applicable to, and benefit, those who volunteer to take part in
                        this process. As we continue to work together, we hope to improve
                        policies and practices that directly impact you, the warfighter.
                    </p>
                </TeamCard>
                <TeamCard title="Judith Harbertson, PhD" image="/team/judith-h.jpg">
                    <p>
                        I am a Research Epidemiologist with the VALOR Division since May
                        2020 and also serve as an Adjunct Associate Professor at San Diego
                        State University. I received my BS in Biological Sciences at the
                        University of California, Irvine and subsequently conducted basic
                        research in immunology at the Scripps Research Institute in San
                        Diego from 1997-2003. I then returned to graduate school at San
                        Diego State University to earn my MPH in Epidemiology and
                        eventually my PhD through the Joint Doctoral Program at San Diego
                        State University and University of California San Diego in 2010.
                        During graduate school, I transitioned to HIV/AIDS prevention and
                        other infectious disease public health research that included
                        field research in San Diego, Mexico and Jamaica.
                    </p>
                    <p>
                        From 2010 until May 2020, my efforts transitioned to HIV/STI
                        prevention research among U.S. Navy and Marine Corps service
                        members with the launch of a longitudinal study that tracked
                        service members across 11 ship platforms assigned to the Third
                        Fleet (pacific) area of responsibility through their entire
                        deployment cycle (timepoints before, during and after deployment).
                        My current research efforts focus on the impact of mental health
                        on long term physical, psychological and quality of life outcomes
                        among injured service members.
                    </p>
                </TeamCard>
                <TeamCard title="Sarah M. Jurick, PhD" image="/team/sarah-j.jpg">
                    <p>
                        I am a clinical neuropsychologist and co-investigator with the
                        VALOR Program. I received my Ph.D. from the San Diego State
                        University/UC San Diego Joint Doctoral Program in Clinical
                        Psychology with a specialization in neuropsychology. I completed
                        my clinical internship at the Massachusetts General
                        Hospital/Harvard Medical School and my postdoctoral research and
                        clinical fellowship at the VA San Diego Healthcare System/UC San
                        Diego.
                    </p>
                    <p>
                        My research has broadly focused on improving long-term mental and
                        physical health outcomes of service members and veterans returning
                        from the conflicts in Iraq and Afghanistan. I am specifically
                        interested in the impact of traumatic brain injury and conditions
                        such as posttraumatic stress disorder, depression, sleep
                        disorders, and chronic pain on cognitive functioning, as well as
                        improving treatment and rehabilitation techniques. I am fortunate
                        to have spent the majority of my career providing clinical care
                        for Veterans and conducting research with military populations,
                        with the ultimate goal of improving quality of life at the
                        individual level and within the broader military community.
                    </p>
                </TeamCard>
                <TeamCard title="Kristen Braganza" image="/team/kristen-b.jpg">
                    <p>
                        I’m a Research Administration Assistant and I joined the WWRP team
                        in early 2019.
                    </p>
                    <p>
                        I’m a veteran of the Navy; I served on the USS Nimitz CVN68 and
                        also at the Naval Legal Service Office Southwest. After the
                        service, I went on to get my degree in Healthcare Administration
                        and went to work at the VA Hospital in San Diego. I enjoyed my
                        time that I spent in the Ambulatory Surgery Unit and the Research
                        Department at the VA as a Program Support Assistant. Helping
                        veterans navigating the VA Healthcare System and receiving the
                        care that they need was an integral part of my work.
                    </p>
                    <p>
                        It is my goal to bring my experience as a veteran, working with
                        and serving veterans to help the success of this team.
                    </p>
                </TeamCard>
                <TeamCard title="Gretchen M. Jones" image="/team/gretchen-j.jpg">
                    <p>
                        I’m a project manager and clinical research associate, and I
                        joined the team in 2018.
                    </p>
                    <p>
                        I studied psychology and biology at California State University,
                        Northridge. Much of the work I have done has been in research with
                        people following a traumatic injury. Prior to joining the VALOR
                        Program team, I was working at Naval Medical Center San Diego
                        researching outcomes following mild traumatic brain injuries, as
                        well as recovery following amputation. Previously, while working
                        at the University of California San Diego, I did research
                        involving children with prenatal alcohol exposure.
                    </p>
                    <p>
                        I enjoy doing work that can directly help others, whether it be
                        immediately or further down the road. I keep day-to-day operations
                        running successfully, so that our team can focus on research aimed
                        at helping wounded service members.
                    </p>
                </TeamCard>
                <TeamCard title="Alexandra V. Spruth" image="/team/alexandra-s.jpg">
                    <p>
                        I'm a research administrator and I joined the team in late 2016. I
                        specialize in business administration and customer service.
                    </p>
                    <p>
                        Prior to joining the team, I worked as a tutor at Grossmont
                        Community College District to assist students and promote their
                        educational success. I enjoy helping others and have made it my
                        goal to provide the best customer service that I can. As part of
                        my job, I appreciate getting the chance to hear from
                        participants—whether over the phone or via email—as it gives me a
                        chance to hear feedback and get to know some of our participants
                        and potential volunteers.
                    </p>
                </TeamCard>
            </ContentBlock>
        </Layout>
    );
};
export default TeamPage;
