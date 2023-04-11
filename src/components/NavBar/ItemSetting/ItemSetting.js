import classNames from 'classnames/bind';
import { useState, forwardRef, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './ItemSetting.module.scss';
import Icons from '~/components/Icons';
import SettingPortal from '~/components/NavBar/ItemSetting/SettingPortal';

const cx = classNames.bind(styles);

const { IoSettingsOutline } = Icons;

function ItemSetting() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(open);
    });
    return (
        <div>
            <Tippy
                className={cx('wrapper-tippy')}
                animation={'perspective-extreme'}
                onClickOutside={() => setOpen(false)}
                visible={open}
                content={<SettingPortal />}
                interactive={true}
                arrow={false}
                offset={[0, 2]}
                placement={'bottom-end'}
            >
                <div className={cx('setting-item')}>
                    <button className={cx('icon-setting')} onClick={() => setOpen((value) => !value)}>
                        <IoSettingsOutline />
                    </button>
                    {!open && <span className={cx('setting_item-title')}>Cài Đặt</span>}
                </div>
            </Tippy>
        </div>
    );
}

export default forwardRef(ItemSetting);
