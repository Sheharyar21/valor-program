import React from 'react';
import OutsideClick from '../OutsideClick';

class Modal extends React.Component {
    handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            this.props.onClickOutside(e);
        }
    };
    componentDidMount() {
        if (typeof document === 'undefined') return;

        document.addEventListener('keydown', this.handleKeyDown, false);
    }
    componentWillUnmount() {
        if (typeof document === 'undefined') return;

        document.removeEventListener('keydown', this.handleKeyDown, false);
    }
    render() {
        return (
            <div>
                <div className="cover">
                    <OutsideClick onClick={this.props.onClickOutside}>
                        <div className="inner">{this.props.children}</div>
                    </OutsideClick>
                </div>
                <style jsx>{`
                    div {
                        background-color: rgba(0, 0, 0, 0.5);
                        position: fixed;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 100;
                    }

                    .cover {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .inner {
                        background: #fff;
                        position: relative;
                        padding: 30px;
                        border-radius: 4px;
                    }
                `}</style>
            </div>
        );
    }
}

export default Modal;
