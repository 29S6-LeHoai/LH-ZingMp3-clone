import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './HeaderActions.module.scss';
import ItemSetting from '~/components/NavBar/ItemSetting/ItemSetting';
import ItemLogin from '~/components/NavBar/ItemLogin/ItemLogin';

import Icons from '~/components/Icons/Icons';
import ItemTheme from '~/components/NavBar/ItemTheme/ItemTheme';

const { RiVipDiamondLine, BsShieldCheck, ImUpload3, MdLogout } = Icons;

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <RiVipDiamondLine />,
        title: 'Nâng Cấp VIP',
        to: '/vip',
    },
    {
        icon: <BsShieldCheck />,
        title: 'Thông Tin Tài Khoản',
        to: '/profile',
    },

    {
        icon: <ImUpload3 />,
        title: 'Tải Lên',
        to: '/upload',
    },

    {
        icon: <MdLogout />,
        title: 'Đăng Xuất',
        to: '/logout',
        separate: true,
    },
];

const MENU_THEME_ITEM = [
    {
        icon: <RiVipDiamondLine />,
        title: 'Nâng Cấp VIP',
        to: '/vip',
    },
    {
        icon: <BsShieldCheck />,
        title: 'Thông Tin Tài Khoản',
        to: '/profile',
    },

    {
        icon: <ImUpload3 />,
        title: 'Tải Lên',
        to: '/upload',
    },

    {
        icon: <MdLogout />,
        title: 'Đăng Xuất',
        to: '/logout',
        separate: true,
    },
];

function HeaderActions() {
    return (
        <div className={cx('header_content-right')}>
            <ItemTheme data={MENU_THEME_ITEM} />

            <ItemSetting />

            <ItemLogin items={MENU_ITEM}></ItemLogin>
        </div>
    );
}

export default HeaderActions;
