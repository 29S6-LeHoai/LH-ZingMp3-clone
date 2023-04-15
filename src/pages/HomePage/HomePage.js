import React, { memo, useEffect } from 'react';
import SliderHomePage from '~/components/SliderHome/SliderHomePage';
import scrollTop from '~/ultis/scrollToTop';
import classNames from 'classnames/bind';

import Styles from './HomePage.module.scss';

const cx = classNames.bind(Styles);
function HomePage() {
    useEffect(() => {
        scrollTop();
    }, []);
    return (
        <div className={cx('home-page-wrapper')}>
            <SliderHomePage />
        </div>
    );
}

export default memo(HomePage);
