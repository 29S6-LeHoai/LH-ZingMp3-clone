import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './HeaderActions.module.scss';
import Button from '~/components/Button/Button';
import config from '~/config';
import ItemSetting from '~/components/NavBar/ItemSetting/ItemSetting';
import Tippy from '@tippyjs/react';
import { ThemeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function HeaderActions() {
    return (
        <div className={cx('header_content-right')}>
            <Tippy content="Chủ Đề" placement="bottom">
                <button className={cx('icon-setting')}>
                    <ThemeIcon />
                </button>
            </Tippy>

            <ItemSetting />

            <Button className={cx('login-btn')} to={config.routes.login} primary rounded>
                Đăng nhập
            </Button>
        </div>
    );
}

export default HeaderActions;
