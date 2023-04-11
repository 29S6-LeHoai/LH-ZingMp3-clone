import classNames from 'classnames/bind';
import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';
import images from '~/assets/images';

function Image({ src, alt, className, fallback, ...props }, ref) {
    const [imageError, setImageError] = useState('');

    const handleImageError = () => {
        setImageError(fallback || images.imageError);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={imageError || src}
            alt={alt}
            ref={ref}
            {...props}
            fallback={fallback}
            onError={handleImageError}
        />
    );
}
Image.propsTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default forwardRef(Image);
