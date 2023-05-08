import React from 'react';
import {BREAKPOINT} from '../../lib/styles';

const ResourcesCard = (props) => {
    const {images = [], title = ''} = props;
    return (
        <div className="resources-card">
            <div className="resources-card__images desktop">{renderImages(images)}</div>
            <div>
                <h3>{title}</h3>
                <div className="resources-card__images mobile">
                    {renderImages(images)}
                </div>
                <div>{props.children}</div>
            </div>
            <style jsx>
                {`
                    h3 {
                        font-size: 24px;
                        line-height: 32px;
                        margin-bottom: 30px;
                    }
                    .resources-card {
                        display: block;
                        padding: 50px 0 20px 0;
                        max-width: 1075px;
                        margin: 0 auto;
                        border-top: 1px solid var(--gray-200);
                    }
                    .resources-card__images.mobile {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                    }
                    .resources-card__images.desktop {
                        display: none;
                    }

                    @media screen and (min-width: ${BREAKPOINT}) {
                        h3 {
                            margin-bottom: 60px;
                        }
                        .resources-card {
                            display: grid;
                            grid-template-columns: 200px auto;
                            grid-gap: 60px;
                        }
                        .resources-card__images.mobile {
                            display: none;
                        }
                        .resources-card__images.desktop {
                            display: block;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default ResourcesCard;

const renderImages = (images) => {
    return (
        <React.Fragment>
            {images && Array.isArray(images) && (
                <React.Fragment>
                    {images.map((image) => {
                        return (
                            <div key={image} className="resources-card__image">
                                <img src={image} width="100%" height="auto" />
                            </div>
                        );
                    })}
                </React.Fragment>
            )}
            <style jsx>
                {`
                    .resources-card__image {
                        max-width: 80px;

                        text-align: center;
                        margin: 0 15px 15px 0;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .resources-card__image {
                            max-width: 140px;
                            margin: 0 auto 30px auto;
                        }
                    }
                `}
            </style>
        </React.Fragment>
    );
};
