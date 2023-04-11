import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import Header from '~/layouts/components/Header/Header';
import RightSidebar from './RightSidebar/RightSidebar';
import BottomSidebar from './BottomSidebar/BottomSidebar';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <LeftSidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>{children}</div>
            </div>
            <RightSidebar />
            <BottomSidebar />
        </div>
    );
}

export default MainLayout;
