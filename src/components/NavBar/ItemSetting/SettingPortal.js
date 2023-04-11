import classNames from 'classnames/bind';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

import styles from './ItemSetting.module.scss';
import Icons from '~/components/Icons';

const cx = classNames.bind(styles);

const { AiOutlinePlayCircle, AiOutlineRight, AiOutlineInfoCircle, HiOutlinePhone, HiOutlineArrowUpRight } = Icons;

const MENU_SETTING_ITEM = [
    {
        iconLeft: <AiOutlineInfoCircle />,
        title: 'Giới Thiệu',
        to: '/info',
        children: false,
    },
    {
        iconLeft: <HiOutlinePhone />,
        iconRight: <HiOutlineArrowUpRight />,
        title: 'Lên Hệ',
        to: '/contact',
        children: false,
    },
];

const SettingPortalChildren = () => {
    const [onSwitch1, setOnSwitch1] = useState(false);
    const [onSwitch2, setOnSwitch2] = useState(false);

    const handleClick = () => {
        if (onSwitch1 === false) {
            setOnSwitch1(true);
        } else {
            setOnSwitch1(false);
        }
    };

    const handleClick2 = () => {
        if (onSwitch2 === false) {
            setOnSwitch2(true);
        } else {
            setOnSwitch2(false);
        }
    };
    return (
        <div className="list-option">
            <div className={cx('option')} onClick={handleClick}>
                <div className={cx('left')}>
                    <div>
                        <p>Luôn phát nhạc full màn hình</p>
                    </div>
                </div>
                <span className={cx('icon')}>
                    {onSwitch1 ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
                </span>
            </div>

            <div className={cx('option')} onClick={handleClick2}>
                <div className={cx('left')}>
                    <div>
                        <b>SQ • 128</b>
                    </div>
                    <div className={cx('desc')}>Giảm sử dụng dữ liệu cho các kết nối chậm. </div>
                </div>
                <span className={cx('icon')}>
                    {onSwitch2 ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
                </span>
            </div>
        </div>
    );
};

function SettingPortal() {
    return (
        <div className="wrapper-menu-setting">
            <div>
                <Tippy
                    className={cx('wrapper-content')}
                    arrow={false}
                    interactive={true}
                    placement="left-start"
                    content={<SettingPortalChildren />}
                >
                    <div className={cx('wrapper')}>
                        <div className={cx('menu-setting')}>
                            <NavLink className={cx('btn-setting')}>
                                <span className={cx('icon')}>
                                    <AiOutlinePlayCircle />
                                </span>
                                <span className={cx('title')}>Trình Phát Nhạc</span>
                                <span className={cx('icon-right')}>
                                    <AiOutlineRight />
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </Tippy>
            </div>

            <div className={cx('wrapper')}>
                <div className={cx('menu-setting')}>
                    {MENU_SETTING_ITEM.map((item, index) => {
                        return (
                            <NavLink
                                key={index}
                                className={(nav) => cx('btn-setting', { active: nav.isActive })}
                                to={item.to}
                            >
                                <span className={cx('icon')}>{item.iconLeft}</span>
                                <span className={cx('title')}>{item.title}</span>
                                <span className={cx('icon-right')}>{item.iconRight}</span>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SettingPortal;
