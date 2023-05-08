import {BREAKPOINT} from '../../lib/styles';

const ContentBlock = (props) => {
    return (
        <div className="content-block" style={{...props.style}}>
            {props.children}
            <style jsx>
                {`
                    .content-block {
                        max-width: 1200px;
                        margin: 0 auto 0 auto;
                        padding: 30px 20px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .content-block {
                            padding: 60px 20px;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default ContentBlock;
