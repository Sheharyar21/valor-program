import {useState} from 'react';
import {BREAKPOINT} from '../../lib/styles';
import Button from '../Button';
import Modal from '../Modal';
import Share from '../Share';
import IconCaret from '../Svgs/icon-caret';

const NewsCard = (props) => {
    const {title = '', author = '', date = '', link = '', description = ''} = props;
    const [showModal, setModal] = useState(false);

    return (
        <div className="news-card">
            <div className="news-card__header">
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: title}} />
                    <div
                        className="news-card__author"
                        dangerouslySetInnerHTML={{__html: `Author: ${author}`}}
                    />
                    <div
                        className="news-card__date"
                        dangerouslySetInnerHTML={{__html: date}}
                    />
                </div>
                <div>
                    <Button onClick={() => setModal(true)}>
                        <div className="btn__content">
                            <div>Share</div>
                            <img src="/icon-share.svg" />
                        </div>
                    </Button>
                </div>
            </div>
            <div className="news-card__main">
                <div>
                    <p className="news-card__main--content">
                        <strong>Short description: </strong>
                        <span dangerouslySetInnerHTML={{__html: description}} />
                    </p>
                    <div>
                        <a href={link} title={title} target="_blank">
                            Link
                        </a>
                    </div>
                </div>
                <a className="icon__caret" href={link} title={title} target="_blank">
                    <IconCaret style={{transform: 'rotate(-90deg)'}} />
                </a>
            </div>
            {showModal && (
                <Modal onClickOutside={() => setModal(false)}>
                    <Share link={link} />
                </Modal>
            )}
            <style jsx>
                {`
                    a {
                        font-weight: 700;
                        font-size: 20px;
                    }
                    .icon__caret {
                        display: none;
                    }
                    .icon__caret:hover {
                        background: var(--gray-200);
                        transition: all 0.5s;
                    }
                    .btn__content {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        font-weight: bold;
                        font-size: 16px;
                        font-family: var(--font-primary);
                    }
                    .btn__content > div:first-child {
                        margin-right: 10px;
                    }
                    .news-card {
                        margin-bottom: 35px;
                    }
                    .news-card__header {
                        display: block;
                        border-bottom: 1px solid var(--gray-200);
                        margin-bottom: 15px;
                        padding-bottom: 20px;
                    }
                    .news-card__header > div:nth-child(2) {
                        margin-top: 15px;
                    }
                    .news-card__date {
                        color: #1e1e1e;
                        font-size: 16px;
                        font-weight: normal;
                        font-family: var(--secondary-font);
                        margin-top: 10px;
                    }
                    .news-card__main {
                        padding-bottom: 40px;
                        border-bottom: 1px solid var(--gray-200);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .news-card__main--content {
                        margin-bottom: 26px;
                        max-width: 800px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .news-card__header {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-bottom: 20px;
                            padding-bottom: 45px;
                        }
                        .icon__caret {
                            width: 38px;
                            height: 38px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 100%;
                            background: var(--gray-100);
                            cursor: pointer;
                        }
                        .news-card__header > div:nth-child(2) {
                            margin-top: 0px;
                        }
                        .news-card__date,
                        .news-card__author {
                            font-size: 20px;
                            margin-top: 15px;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default NewsCard;
