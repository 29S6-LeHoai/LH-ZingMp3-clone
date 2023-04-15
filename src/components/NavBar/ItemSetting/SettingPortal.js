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
    const [active, setActive] = useState(true);
    const [active2, setActive2] = useState(false);

    const handleClick = () => {
        setOnSwitch1(!onSwitch1);
    };

    const handleClick2 = () => {
        setActive(true);
        setActive2(false);
    };

    const handleClick3 = () => {
        setActive2(true);
        setActive(false);
    };
    return (
        <div className="list-option">
            <div className={`${cx('option-screen')}`} onClick={handleClick}>
                <div className={cx('left')}>
                    <div className={cx('option-screen-title')}>
                        <p>Luôn phát nhạc full màn hình</p>
                    </div>
                    <span className={`${classNames(styles.icon)} ${onSwitch1 && classNames(styles.active)}`}>
                        {onSwitch1 ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
                    </span>
                </div>
            </div>

            <div className={cx('option-quality')}>
                <h4 className={cx('header-quality')}>Chất lượng nhạc</h4>
                <div className={cx('body-quality')}>
                    <button
                        className={`${cx('header-quality-title')} ${active && cx('active')}`}
                        onClick={handleClick2}
                    >
                        SQ • 128
                    </button>

                    <button
                        className={`${cx('header-quality-title')} ${active2 && cx('active')}`}
                        onClick={handleClick3}
                    >
                        HQ • 320
                    </button>
                </div>
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
