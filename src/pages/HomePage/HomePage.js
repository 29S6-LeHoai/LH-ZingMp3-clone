import React, { memo, useEffect } from 'react';

import scrollTop from '~/ultis/scrollToTop';
import classNames from 'classnames/bind';

import Styles from './HomePage.module.scss';
import { NewMusicPage, SliderHomePage } from '~/components/HomePageChildren';

const cx = classNames.bind(Styles);
function HomePage() {
    useEffect(() => {
        scrollTop();
    }, []);
    return (
        <div className={cx('home-page-wrapper')}>
            <SliderHomePage />
            <NewMusicPage />
        </div>
    );
}

export default memo(HomePage);
