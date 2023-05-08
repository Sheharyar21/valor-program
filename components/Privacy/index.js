import ContentBlock from '../ContentBlock';
import IconCheck from '../Svgs/icon-check';
import Link from 'next/link';
import Accordion from '../Accordion';

export const Privacy = (props) => {
    return (
        <div className="privacy">
            <ContentBlock>
                <h2>Privacy</h2>
                <section>
                    <p>
                        This is the website of the Veteran & Active Duty Longitudinal
                        Outcomes Research (VALOR) Program, Naval Health Research Center
                        (NHRC), Department 161, 140 Sylvester Road, San Diego, CA
                        92106-3521. We can be reached via e-mail at{' '}
                        <a href="mailto:usn.valorprogram@mail.mil">
                            usn.valorprogram@mail.mil
                        </a>{' '}
                        or toll-free by telephone at{' '}
                        <a href="tel:+1-855-557-6480">1-855-557-6480</a>.
                    </p>
                </section>
                <section className="section__accordions">
                    <Accordion title="What information do we collect?">
                        <div>
                            <p>
                                The information we collect from you may be used in one of
                                the following ways:
                            </p>
                            <div className="section__check">
                                <div>
                                    <IconCheck />
                                </div>
                                <div>
                                    <p>
                                        <strong>To conduct research:</strong>
                                    </p>
                                    <p>
                                        Your information, whether public or private, will
                                        not be sold, exchanged, transferred, or given to
                                        any third party for any reason whatsoever, without
                                        your consent, and will not be used other than for
                                        the express purpose of conducting research as
                                        outlined in our Institutional Review Board
                                        (IRB)-approved study protocol #NHRC.2009.0014.
                                        This information will not be shared with
                                        supervisors, authorities, or medical systems.
                                        Identification numbers are used instead of names.
                                        In addition, this study has been reviewed and
                                        approved by the TRICARE Management Activity (TMA)
                                        Office, the Office of the Assistant Secretary of
                                        Defense for Health Affairs (OASD/HA), the Defense
                                        Manpower Data Center (DMDC) (DMDC Reference Number
                                        11-0015), and has received Report Control Symbol
                                        (RCS) #DD-HA(SA)2387 from Washington Headquarters
                                        Services.
                                    </p>
                                </div>
                            </div>
                            <div className="section__check">
                                <div>
                                    <IconCheck />
                                </div>
                                <div>
                                    <p>
                                        If you decide to participate, we will use your
                                        contact information to get in touch with you when
                                        a response from you is needed or if you have
                                        submitted a question.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Accordion>
                    <Accordion title="How do we protect your information?">
                        <div>
                            <p>
                                We use a secure server. All supplied sensitive information
                                is transmitted via encrypted Secure Sockets Layer (SSL)
                                technology. Identification numbers are used instead of
                                names. Data can only be accessed by authorized personnel
                                with special access permissions. These personnel are
                                required to keep the information confidential. They will
                                not share your information with anyone, including
                                supervisors, authorities, or medical systems.
                            </p>
                            <p>
                                To further help us protect participant privacy, we have
                                obtained a Certificate of Confidentiality from the U.S.
                                Department of Health and Human Services (DHHS). With this
                                certificate, we cannot be forced to disclose information
                                that may identify participants in any federal, state,
                                local, civil, criminal, legislative, administrative, or
                                other proceeding. We will use the certificate to resist
                                any demands for information that would identify a
                                participant, except to prevent serious harm to the
                                participant or others. A Certificate of Confidentiality
                                does not prevent a participant from voluntarily releasing
                                information about themselves or their involvement in the
                                study. A Certificate of Confidentiality does not represent
                                an endorsement of the study by the DHHS or the National
                                Institutes of Health.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion title="Do we use cookies?">
                        <div>
                            <p>We do not use cookies.</p>
                        </div>
                    </Accordion>
                    <Accordion title="Do we disclose any information to third parties?">
                        <div>
                            <p>
                                We do not sell, trade, or otherwise transfer to third
                                parties your personally identifiable information in
                                accordance with Department of Defense regulations and the
                                provisions of research protocol #NHRC.2009.0014. This
                                includes supervisors, authorities, and medical systems.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion title="Health Insurance Portability and Accountability Act Compliance">
                        <div>
                            <p>
                                Federal regulations give you certain rights related to
                                your health information. These include the right to know
                                who will have access to the information. If you choose to
                                participate in this study, the study staff will obtain
                                information that will identify you. You will be asked to
                                respond to a web-based or telephone assessment about your
                                general health, work, daily physical activities, and
                                activities in the community. In addition, your
                                service-related electronic medical and personnel records
                                will be reviewed and linked to your responses. This
                                information will be used only by study personnel and will
                                be maintained for 10 years after completion of the study.
                            </p>
                            <p>
                                You may change your mind and revoke (take back) your
                                permission to collect or use your health information at
                                any time. To revoke your permission, you must write to the
                                person in charge of the study (
                                <a href="/" title="Michael Galarneau">
                                    Michael Galarneau
                                </a>
                                ). When you revoke your permission, no new health
                                information about you will be gathered after that date and
                                you may no longer be allowed to participate in the study.
                                Information that has already been gathered may still be
                                used and there is no guarantee that it will be removed
                                from the electronic database for this study. You also have
                                the right to review and copy your health information for
                                as long as copies of the assessments are maintained by
                                contacting the person in charge of the study (
                                <a href="/" title="Michael Galarneau">
                                    Michael Galarneau
                                </a>
                                ).
                            </p>
                            <p>
                                <a href="/" title="Michael Galarneau">
                                    Michael Galarneau
                                </a>{' '}
                                is responsible for storing your health information and
                                other information collected about you during the study.
                                This information will be protected by keeping all paper
                                copies of your information in a locked file at the Naval
                                Health Research Center. Electronic data will be stored in
                                secure password-protected files at Naval Health Research
                                Center. Identification numbers are used instead of names.
                                Access to all data will be limited to staff involved with
                                this study, and will not be shared with supervisors,
                                authorities, or medical systems. The health information
                                that you disclose will not be used by or disclosed
                                (released) to another institution.
                            </p>
                            <p>
                                The results of this study may be published in DoD
                                technical reports, scientific journals, or presented at
                                scientific meetings. No publication or presentation about
                                the research study described above will reveal your
                                identity without another authorization from you. Lastly,
                                individuals from official government agencies, such as the
                                Department of Defense and the U.S. Navy, may inspect your
                                research records to ensure that the rights and safety of
                                all research participants are protected. By signing the
                                consent form, you are giving permission to use the health
                                information listed above for the purposes described in the
                                consent form. If you refuse to give permission, you will
                                not be able to be in this study.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion title="California Online Privacy Protection Act Compliance">
                        <div>
                            <p>
                                This study complies with the California Online Privacy
                                Protection Act. We will not distribute your personal
                                information to third parties without your consent.
                            </p>
                            <p>
                                As part of the California Online Privacy Protection Act,
                                study staff can assist with updating personal information;
                                please visit the{' '}
                                <Link href="/contact-us">
                                    <a title="Contact Us page">Contact Us page</a>
                                </Link>{' '}
                                for assistance.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion title="Children's Online Privacy Protection Act Compliance">
                        <div>
                            <p>
                                This study complies with the requirements of COPPA
                                (Children’s Online Privacy Protection Act); we do not
                                collect any information from anyone under 18 years of age.
                                Our website, products and services are all directed to
                                people who are at least 18 years of age or older.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion title="Changes to our Privacy Policy">
                        <div>
                            <ul>
                                <li>
                                    If our Privacy Policy changes, we will post those
                                    changes on this page, and update the Privacy Policy
                                    modification date below.
                                </li>
                                <li>This policy was last modified on 9 JAN 2018.</li>
                                <li>
                                    Contact us if there are any questions regarding this
                                    Privacy Policy please contact us.
                                </li>
                            </ul>
                            <div className="header">Terms & Conditions</div>
                            <p>
                                Welcome to the Veteran & Active Duty Longitudinal Outcomes
                                Research (VALOR) Program website. This website is
                                maintained by the Naval Health Research Center (NHRC) in
                                San Diego for the purpose of conducting research for the
                                public good. Note that no information or materials
                                provided are intended to represent or constitute
                                replacement therapies or guidance from professional
                                healthcare providers. In addition, the contents of this
                                site do not necessarily represent the official policy or
                                position of the Department of the Navy, Department of
                                Defense, or the U.S. Government. Thank you for your
                                interest in and support of the men and women of the U.S.
                                Armed Forces. By using the site, you agree to these terms
                                of use. Please read them carefully.
                            </p>
                            <div className="header">Privacy</div>
                            <p>
                                Please review our Privacy Policy, which also governs your
                                use of our website, to understand our privacy practices.
                            </p>
                            <div className="header">Electronic Communications</div>
                            <p>
                                When you visit our site or send emails to us, you are
                                communicating with us electronically. You consent to
                                receive communications from us electronically. We will
                                communicate with you by e-mail or by posting notices on
                                this site. You agree that all agreements, notices,
                                disclosures, and other communications that we provide to
                                you electronically satisfy any legal requirement that such
                                communications be in writing.
                            </p>
                            <div className="header">Copyright</div>
                            <p>
                                All content on this site, such as text, graphics, user
                                interfaces, visual interfaces, logos, button icons, and
                                computer code on the site is the exclusive property of
                                NHRC and may not be copied, reproduced, uploaded, posted,
                                publicly displayed, transmitted or distributed in any way
                                or republished without the prior consent of NHRC.
                            </p>
                            <div className="header">Confidentiality</div>
                            <p>
                                As a participant you will be asked to sign in to the
                                website to answer questions. You have responsibility for
                                maintaining the confidentiality of your account by keeping
                                secret your user name (i.e., study number) and access
                                code, and by not leaving yourself logged in to the WWRP
                                website while your computer is unattended.
                            </p>
                            <div className="header">Links to Other Sites</div>
                            <p>
                                This site may contain links to other independent
                                third-party websites. These linked sites are provided
                                solely as a convenience to our visitors. The VALOR Program
                                is not responsible for and does not endorse the content of
                                the linked sites, including any information or materials
                                contained on the sites.
                            </p>
                            <div className="header">Prohibited Activities</div>
                            <p>
                                You may not use any automated or manual process, to
                                access, acquire, copy or monitor any portion of the site
                                or any content in any way, or circumvent the navigational
                                structure of the site, to block any content, to obtain or
                                attempt to obtain any materials, documents or information
                                through any means not purposefully made available through
                                the site. NHRC reserves the right to bar any such
                                activity. You may not use the site or any content for any
                                purpose that is unlawful or prohibited by these Terms of
                                Use, or to solicit the performance of any illegal activity
                                or other activity which infringes upon the rights of the
                                VALOR Program, NHRC, or others.
                            </p>
                            <div className="header">Errors or Modifications</div>
                            <p>
                                NHRC reserves the right to, at any time, modify, alter,
                                suspend or remove the site in whole or in part. NHRC does
                                not guarantee that the function of the site will be
                                error-free or uninterrupted. Under no circumstances will
                                NHRC be liable for any damages, liability or injury caused
                                by errors or unexpected behaviors of the site, or by your
                                inability to access the site in whole or in part.
                            </p>
                            <div className="header">Governing Law</div>
                            <p>
                                You agree that all matters relating to your access to or
                                use of the site, including all disputes, will be governed
                                by the laws of the United States and by the laws of
                                California.
                            </p>
                            <p>
                                <strong>Questions:</strong> If there are any questions
                                regarding these Terms and Conditions, please{' '}
                                <Link href="/contact-us">
                                    <a title="Contact Us">contact us</a>
                                </Link>
                                .
                            </p>
                        </div>
                    </Accordion>
                </section>
                <p>Updated: Jan 1, 2021</p>
            </ContentBlock>
            <style jsx>
                {`
                    .privacy {
                        background: #efefef;
                    }
                    p {
                        color: #495057;
                    }
                    h2 {
                        font-size: 40px;
                        line-height: 52px;
                        color: #000;
                    }
                    h3 {
                        font-size: 24px;
                        line-height: 32px;
                        margin-bottom: 32px;
                    }
                    ul {
                        padding: 0;
                        margin: 30px 0;
                        color: #495057;
                    }
                    section {
                        padding: 30px 0 0 0;
                    }
                    .section__check {
                        display: grid;
                        grid-template-columns: 32px auto;
                        align-items: flex-start;
                        grid-gap: 30px;
                    }
                    .section__check > div:nth-child(1) {
                        width: 32px;
                        height: 32px;
                        background: #fff;
                        border-radius: 100%;
                        margin-top: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .header {
                        font-weight: bold;
                        color: #495057;
                    }
                    .section__accordions {
                        margin-bottom: 30px;
                    }
                `}
            </style>
        </div>
    );
};
export default Privacy;
