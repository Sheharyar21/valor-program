import {BREAKPOINT} from '../../lib/styles';

const FaqCard = (props) => {
    const {number = '', question = ''} = props;
    return (
        <div className="faq-card">
            <div>
                <div className="faq-card__number desktop">{number}</div>
            </div>
            <div>
                <h3 className="faq-card__question">
                    <div className="faq-card__number mobile">{number}</div>
                    {question}
                </h3>
                <div className="faq-card__answer">{props.children}</div>
            </div>
            <style jsx>
                {`
                    h3 {
                        font-size: 24px;
                        line-height: 32px;
                        display: grid;
                        grid-template-columns: 32px auto;
                        grid-gap: 15px;
                        align-items: flex-start;
                        font-family: var(--font-primary);
                    }
                    .faq-card {
                        display: block;
                        padding: 42px 0 0 0;
                        border-top: 1px solid var(--gray-200);
                    }

                    .faq-card__number {
                        background: var(--interactive);
                        color: #fff;
                        font-weight: bold;
                        height: 32px;
                        width: 32px;
                        font-size: 16px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 100%;
                    }
                    .faq-card__number.desktop {
                        display: none;
                    }
                    .faq-card__answer {
                        margin: 24px 0;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        h3 {
                            display: block;
                        }
                        .faq-card {
                            display: grid;
                            grid-template-columns: 32px auto;
                            grid-gap: 20px;
                            align-items: flex-start;
                            padding: 42px 0 0 0;
                        }
                        .faq-card__number.desktop {
                            display: flex;
                        }
                        .faq-card__number.mobile {
                            display: none;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default FaqCard;
