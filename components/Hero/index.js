import Image from 'next/image';
import {BREAKPOINT} from '../../lib/styles';

const Hero = ({src, alt}) => {
    return (
        <div className="hero">
            <div className="hero__img" />
            <style jsx>
                {`
                    .hero {
                        width: 100%;
                        height: 300px;
                        position: relative;
                        background: var(--gray-200);
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .hero {
                            height: 655px;
                        }
                    }
                    .hero__img {
                        width: 100%;
                        height: 300px;
                        position: relative;
                        background-image: url(${src});
                        background-size: cover;
                        background-position: center center;
                        -webkit-animation: fadein 1.2s; /* Safari, Chrome and Opera > 12.1 */
                        -moz-animation: fadein 1.2s; /* Firefox < 16 */
                        -ms-animation: fadein 1.2s; /* Internet Explorer */
                        -o-animation: fadein 1.2s; /* Opera < 12.1 */
                        animation: fadein 1.2s;
                    }

                    @media screen and (min-width: ${BREAKPOINT}) {
                        .hero__img {
                            height: 655px;
                        }
                    }

                    @keyframes fadein {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    /* Firefox < 16 */
                    @-moz-keyframes fadein {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    /* Safari, Chrome and Opera > 12.1 */
                    @-webkit-keyframes fadein {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    /* Internet Explorer */
                    @-ms-keyframes fadein {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default Hero;
