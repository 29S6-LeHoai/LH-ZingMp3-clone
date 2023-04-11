import classNames from 'classnames/bind';

import styles from './LeftSidebar.module.scss';
import images from '~/assets/images';
import Menu from '~/layouts/MainLayout/LeftSidebar/Menu/Menu';
import MenuItem from '~/layouts/MainLayout/LeftSidebar/Menu/MenuItem';
import config from '~/config';
import {
    MymusicIcon,
    FollowIcon,
    KhamphaIcon,
    MVIcon,
    NewmusicIcon,
    RadioIcon,
    TheloaIcon,
    Top100Icon,
    ZingchartIcon,
} from '~/components/Icons';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function LeftSidebar() {
    return (
        <aside className={cx('left-sidebar')}>
            <div className={cx('left-sidebar-wrapper')}>
                <div className={cx('logo-item')}>
                    <img src={images.logo} alt="logo" />
                    <span className={cx('text-logo')}>HL</span>
                    <span className={cx('text-logo1')}>MP3</span>
                </div>
                <Menu>
                    <div className={cx('zm-nav-menu-top')}>
                        <MenuItem title="Thư Viện" to={config.routes.mymusic} icon={<MymusicIcon />} />
                        <MenuItem title="Khám Phá" to={config.routes.home} icon={<KhamphaIcon />} />
                        <MenuItem title="#zingchart" to={config.routes.zingchart} icon={<ZingchartIcon />} />
                        <MenuItem title="Radio" to={config.routes.radio} icon={<RadioIcon />} />
                        <MenuItem title="Theo Dõi" to={config.routes.following} icon={<FollowIcon />} />
                    </div>
                </Menu>

                <div className={cx('divide')}></div>

                <div className={cx('scroll-wrapper')}>
                    <div className={cx('zm-nav-menu-scroll')}>
                        <Menu>
                            <div className={cx('zm-nav-menu')}>
                                <MenuItem title="Nhạc Mới" to={config.routes.nhacmoi} icon={<NewmusicIcon />} />
                                <MenuItem title="Chủ Đề Và Thể Loại" to={config.routes.theloai} icon={<TheloaIcon />} />
                                <MenuItem title="Top100" to={config.routes.top100} icon={<Top100Icon />} />
                                <MenuItem title="MV" to={config.routes.mv} icon={<MVIcon />} />
                            </div>
                            <div className={cx('login-nav-container')}>
                                <span className={cx('title')}>
                                    Đăng nhập để khám phá những bản nhạc hay nhất dành cho bạn
                                </span>
                                <Button
                                    className={cx('btn-login-sidebar')}
                                    to={config.routes.login}
                                    primary
                                    rounded
                                    small
                                >
                                    ĐĂNG NHẬP
                                </Button>
                            </div>

                            <div className={cx('vip-banner-container')}>
                                <span className={cx('title-vip')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</span>
                                <Button
                                    className={cx('btn-vip-sidebar')}
                                    to={config.routes.login}
                                    primary
                                    rounded
                                    small
                                >
                                    NÂNG CẤP VIP
                                </Button>
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default LeftSidebar;
