import Image from 'next/image';
import {BREAKPOINT} from '../../lib/styles';
const TeamCard = (props) => {
    const {image = '', title = ''} = props;
    return (
        <div className="team-card">
            <div className="team-card__image">
                <Image src={image} alt={title} width="200px" height="200px" />
            </div>
            <div>
                <h3>{title}</h3>
                <div>{props.children}</div>
            </div>
            <style jsx>
                {`
                    h3 {
                        font-size: 24px;
                        line-height: 36px;
                        margin-bottom: 30px;
                    }
                    .team-card {
                        display: block;
                        border-top: 1px solid var(--gray-200);
                        padding: 20px 0;
                    }
                    .team-card__image {
                        display: flex;
                        justify-content: center;
                        margin: 0 auto 30px auto;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        h3 {
                            margin-bottom: 60px;
                        }
                        .team-card {
                            display: grid;
                            grid-template-columns: 200px auto;
                            grid-gap: 60px;
                            padding: 45px 0 10px 0;
                        }
                        .team-card__image {
                            display: block;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default TeamCard;
