import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContentBlock from '../components/ContentBlock';
import ResourcesCard from '../components/ResourcesCard';
import Head from 'next/head';

const Resources = (props) => {
    return (
        <Layout>
            <Head>
                <title>Resources</title>
                <meta name="title" content="Resources" />
                <meta name="description" content="" />
            </Head>
            <Hero src="/hero-resources.jpg" />
            <ContentBlock>
                <h1>Resources</h1>
                <ResourcesCard
                    title="Warrior Care"
                    images={['/resources/warrior_care.jpg']}>
                    <p>
                        The Office of Warrior Care provides DoD policy development,
                        oversight, and performance management to support what remains a
                        highest priority for the department: ensuring the nation’s
                        wounded, ill, and injured service members, their families, and
                        caregivers receive the support they need for recovery,
                        rehabilitation, and reintegration. The WCP provides a
                        comprehensive reference guide to answer some of the most pressing
                        questions that arise for wounded, ill, and/or injured service
                        members.
                    </p>
                    <p>
                        Check out the{' '}
                        <a
                            href="https://warriorcare.dodlive.mil/benefits/compensation-and-benefits/"
                            title="DoD Wounded, Ill, and/or Injured Compensation and Benefits
                            Handbook"
                            target="_blank">
                            DoD Wounded, Ill, and/or Injured Compensation and Benefits
                            Handbook
                        </a>{' '}
                        or visit the WCP site linked below for more information, visit the{' '}
                        <a
                            href="https://warriorcare.dodlive.mil/"
                            title="Warrior Care Website"
                            target="_blank">
                            Warrior Care website
                        </a>
                        .
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Army Recovery Care Program (ARCP)"
                    images={['/resources/arcp.jpg']}>
                    <p>
                        The Army Recovery Care Program evaluates and treats wounded, ill,
                        and injured soldiers through a comprehensive, soldier-centric
                        process of medical care, rehabilitation, professional development,
                        and achievement of personal goals.
                    </p>
                    <p>
                        <a
                            href="/"
                            title="Brochures and Fact Sheets page"
                            target="_blank">
                            Brochures and Fact Sheets page
                        </a>{' '}
                        provides information about many different aspects of the program,
                        or visit the ARCP overview site.
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Ombudsman Program"
                    images={['/resources/ombudsman.jpg']}>
                    <p>
                        The Ombudsman Program functions as a resource in support of
                        service members and their family members who need assistance with
                        a medical related issue. Ombudsmen are D.A. civilians who have
                        been selected for their experience, determination, and passion to
                        help service members. They are located at 35 locations in the
                        United States, Puerto Rico, and Europe.
                    </p>
                    <p>
                        Please{' '}
                        <a href="/" title="" target="_blank">
                            click here
                        </a>{' '}
                        for a fact sheet on the program, or visit the
                        <a href="/" title="" target="_blank">
                            site
                        </a>
                        .
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Extremity Trauma and Amputation Center of Excellence (EACE)"
                    images={['/resources/eace.jpg']}>
                    <p>
                        The Extremity Trauma and Amputation Center of Excellence (EACE) is
                        the leading advocate for research and treatment of Department of
                        Defense and Department of Veterans Affairs patients with extremity
                        trauma and amputation. Working with TRICARE, the Military Health
                        System, Veterans Health Administration and other Centers of
                        Excellence, the EACE will lead efforts to enhance collaboration
                        between the Department of Defense and the Department of Veterans
                        Affairs extremity trauma and amputee care providers and conduct
                        scientific research to minimize the effects of traumatic injuries
                        and improve clinical outcomes.
                    </p>
                    <p>
                        <a href="/" title="EACE website" target="_blank">
                            EACE website
                        </a>
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="National Intrepid Center of Excellence (NICoE)"
                    images={['/resources/nicoe.jpg']}>
                    <p>
                        The National Intrepid Center of Excellence (NICoE) is a DoD
                        institute dedicated to providing cutting-edge evaluation,
                        treatment planning, research, and education for service members
                        and their families dealing with the complex interactions of mild
                        traumatic brain injury and psychological health conditions.
                    </p>
                    <p>
                        <a href="/" title="NICoE website" target="_blank">
                            NICoE website
                        </a>
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Navy Medicine"
                    images={['/resources/navy_medicine.jpg']}>
                    <p>
                        Navy Medicine is where policy and direction are developed toward
                        the patient and family care vision which is carried out by Navy,
                        Marine Corps and civilian personnel throughout the world. Navy
                        Medicine is located at the Defense Health Headquarters (DHHQ) in
                        Falls Church, VA (just west of Washington, DC), along with the
                        Army and Air Force medical commands.
                    </p>
                    <p>
                        <a
                            href="https://www.med.navy.mil/Pages/default.aspx"
                            title="Navy Medicine website"
                            target="_blank">
                            Navy Medicine website
                        </a>
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Center for the Intrepid (CFI)"
                    images={['/resources/cfi.jpg']}>
                    <p>
                        The threefold mission of the CFI is (1) to provide rehabilitation
                        for OIF/OEF casualties who have sustained amputation, burns, or
                        functional limb loss; (2) to provide education to DoD and
                        Department of Veterans Affairs professionals on cutting edge
                        rehabilitation modalities; and (3) to promote research in the
                        fields of orthopaedics, prosthetics, and physical/occupational
                        rehabilitation.
                    </p>
                    <p>
                        <a href="/" title="CFI website" target="_blank">
                            CFI website
                        </a>
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Wounded Warrior"
                    images={['/resources/navy_wounded_warrior.png']}>
                    <p>
                        Navy Wounded Warrior - is the Navy’s organization for coordinating
                        the non-medical care of seriously wounded, ill and injured Sailors
                        and Coast Guardsmen, and providing resources and support to their
                        families. Through proactive leadership, the program provides
                        individually tailored assistance designed to optimize the success
                        of the shipmates’ recovery, rehabilitation and reintegration
                        activities.
                    </p>
                    <p>
                        <a
                            href="https://www.navywoundedwarrior.com/"
                            title="Navy Wounded Warrior website"
                            target="_blank">
                            Navy Wounded Warrior website
                        </a>
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Public Health Center - Health Promotion and Wellness (NMCPHC-HPW)"
                    images={['/resources/navy_and_marine_corps.jpg']}>
                    <p>
                        The mission of the NMCPHC Health Promotion and Wellness Center is
                        to provide innovative and evidence-based health promotion and
                        wellness (HPW) programs and services that facilitate readiness and
                        resilience, prevent illness and injury, hasten recovery and
                        promote lifelong healthy behaviors and lifestyles. The NMCPHC-HPW
                        vision is to be a world-class Center of Excellence empowering
                        people to live healthier lives. NMCPHC website
                    </p>
                    <p>
                        <a href="/" title="NMCPHC website" target="_blank">
                            NMCPHC website
                        </a>
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Relief Society (NMCRS)"
                    images={['/resources/navy-marine_corps_relief_society.jpg']}>
                    <p>
                        The CCA VN Program was established in 2006 as an offshoot of the
                        traditional Navy-Marine Corps Relief Society (NMCRS) Visiting
                        Nurse Program, and exists to provide long-term follow-up to
                        Marines and Sailors who have served in combat, and their family
                        members, in order to help them achieve the best possible quality
                        of post-combat life.
                    </p>
                    <p>
                        <a href="/" title="NMCRS website" target="_blank">
                            NMCRS website
                        </a>
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Comprehensive Combat and Complex Casualty Care (C5)"
                    images={['/resources/navy_medicine.jpg']}>
                    <p>
                        The Naval Health Research Center develops and delivers operational
                        biomedical research solutions that enhance the health, safety,
                        readiness, and performance of our military forces. "Readiness
                        Through Research and Development".
                    </p>
                    <p>
                        <a href="/" title="C5 website" target="_blank">
                            C5 website
                        </a>
                    </p>
                </ResourcesCard>
                <ResourcesCard
                    title="Naval Health Research Center (NHRC)"
                    images={['/resources/naval_health_research_center.jpg']}>
                    <p>
                        The Naval Health Research Center develops and delivers operational
                        biomedical research solutions that enhance the health, safety,
                        readiness, and performance of our military forces. "Readiness
                        Through Research and Development".
                    </p>
                    <p>
                        <a href="/" title="NHRC website" target="_blank">
                            NHRC website
                        </a>
                    </p>
                </ResourcesCard>
            </ContentBlock>
        </Layout>
    );
};
export default Resources;
