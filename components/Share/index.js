const Share = ({title, link}) => {
    return (
        <div>
            <span>Share</span>
            <a
                href={`https://twitter.com/intent/tweet?url=${link}&text=${title}`}
                style={{backgroundColor: '#00a2ea'}}
                target="_blank"
                title="Share to Twitter">
                Twitter
                <i>
                    <img src="/icon-twitter.svg" />
                </i>
            </a>
            <a
                href={`https://www.facebook.com/sharer.php?u=${link}`}
                style={{backgroundColor: '#344f8d'}}
                target="_blank"
                title="Share to Facebook">
                Facebook
                <i>
                    <img src="/icon-facebook.svg" />
                </i>
            </a>
            <a
                href={`mailto:?subject=${title}&body=${link}`}
                style={{backgroundColor: '#ff6c03'}}
                target="_blank"
                title="Share in Email">
                Email
                <i>
                    <img src="/icon-mail.svg" />
                </i>
            </a>
            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                }
                span {
                    color: #a4a4a4;
                    font-weight: bold;
                    font-size: 13px;
                    margin: 0 15px 0 5px;
                    text-transform: uppercase;
                }
                a {
                    height: 50px;
                    width: 150px;
                    font-weight: bold;
                    font-family: var(--font-primary);
                    margin-right: 5px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    border-radius: 4px;
                    text-decoration: none;
                }
            `}</style>
        </div>
    );
};

export default Share;
