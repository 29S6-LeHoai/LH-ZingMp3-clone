import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Search from '../Search/Search';
import HeaderActions from '~/layouts/components/HeaderActions/HeaderActions';
import Icons from '~/components/Icons/Icons';

const cx = classNames.bind(styles);
const { HiOutlineArrowRight, HiOutlineArrowLeft } = Icons;

function Header() {
    return (
        <header className={cx('zm-header')}>
            <div className={cx('wrapper')}>
                <div className={cx('header-left')}>
                    <span className={cx('zm-header-icon')}>{<HiOutlineArrowLeft />}</span>
                    <span className={cx('zm-header-icon')}>{<HiOutlineArrowRight />}</span>
                    <Search />
                </div>

                <div className={cx('header-right')}>
                    <HeaderActions />
                </div>
            </div>
        </header>
    );
}

export default Header;
