import Image from 'next/image';
import {BREAKPOINT} from '../../lib/styles';

const ImageBlock = ({src = '', alt = ''}) => {
    return (
        <div className="image-block">
            <Image
                src={src}
                layout="fill"
                objectFit="cover"
                alt={alt || 'Valor Program Image'}
            />
            <style jsx>
                {`
                    .image-block {
                        width: 100%;
                        height: 300px;
                        background: var(--gray-200);
                        position: relative;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .image-block {
                            height: 655px;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default ImageBlock;
