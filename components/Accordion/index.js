import {BREAKPOINT} from '../../lib/styles';
import React, {createRef, useState} from 'react';

function collapseSection(element) {
    const sectionHeight = element.scrollHeight;
    const elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(() => {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;
        requestAnimationFrame(() => {
            element.style.height = 0 + 'px';
        });
    });
}

function expandSection(element) {
    const sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';
}

/**
 * - Hide or show content
 * - See [design files](https://www.figma.com/file/f1iF027Hkt0ayq2MBDVVC3/DrugAbuse.com---Shortcodes?node-id=0%3A1)
 * - WP Usage `[accordian][section title="my title"]This is my content[section][/accordian]`
 */
const Accordion = (props) => {
    const {title = '', children = '', maxHeight = '', expand = false} = props;

    const ref = createRef();
    const [expanded, setExpanded] = useState(expand);

    return (
        <>
            <div className={`accordion ${expanded ? 'is-expanded' : ''}`}>
                <div
                    className="accordion__head"
                    onClick={() => {
                        expanded
                            ? collapseSection(ref.current)
                            : expandSection(ref.current);
                        setExpanded(!expanded);
                    }}>
                    <div
                        className="accordion__title"
                        dangerouslySetInnerHTML={{__html: title}}
                    />
                </div>

                <div
                    ref={ref}
                    className="accordion__body"
                    style={{
                        maxHeight: maxHeight ? maxHeight : 'auto',
                        overflowY: maxHeight ? 'scroll' : 'auto',
                    }}>
                    <div className="accordion__wrapper">{children}</div>
                </div>
            </div>
            <style jsx>
                {`
                    .accordion {
                        border-bottom: 1px solid var(--gray-200);
                    }
                    .accordion__head {
                        padding: 1.05em 0 1.05em 0;
                        position: relative;
                        color: #000;
                        font-family: var(--font-primary);
                        user-select: none;
                        border-bottom: 1px solid #ccc;
                    }
                    .accordion__title {
                        font-weight: bold;
                        max-width: 80%;
                    }
                    .accordion__head:hover {
                        cursor: pointer;
                    }
                    .accordion__head:after,
                    .accordion__head:before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translate(-50%, -50%);
                        width: 16px;
                        height: 2px;
                        border-radius: 1px;
                        background-color: #000;
                        transition: transform 0.3s;
                    }
                    @media (max-width: ${BREAKPOINT}),
                        screen and (max-width: 812px) and (orientation: landscape) {
                        .accordion__head:after,
                        .accordion__head:before {
                            right: -1px;
                        }
                    }
                    .accordion__head:before {
                        transform: translate(-50%, -50%) rotate(90deg);
                    }
                    .accordion__body {
                        overflow: hidden;
                        height: 0;
                        transition: height 0.3s ease-out;
                    }
                    .is-expanded .accordion__body {
                        height: auto;
                    }
                    .accordion__wrapper {
                        padding-right: 3.9em;
                        padding-bottom: 1.8em;
                        padding-top: 1em;
                    }
                    @media (max-width: ${BREAKPOINT}),
                        screen and (max-width: 812px) and (orientation: landscape) {
                        .accordion__wrapper {
                            padding-right: 2.2em;
                            padding-bottom: 0.8em;
                        }
                    }
                    .accordion__wrapper > *:last-child {
                        margin-bottom: 0;
                    }
                    .accordion.is-expanded .accordion__head:before {
                        transform: translate(-50%, -50%);
                    }
                `}
            </style>
        </>
    );
};

export default Accordion;
