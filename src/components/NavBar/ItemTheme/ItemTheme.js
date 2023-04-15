import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ThemeIcon } from '~/components/Icons';
import styles from './ItemTheme.module.scss';
import ThemePortal from './ThemePortal';

const cx = classNames.bind(styles);

function ItemTheme({ data }) {
    const [modalOpen, setmodalOpen] = useState(false);

    const open = useCallback(() => {
        setmodalOpen(true);
    }, []);

    const close = useCallback(() => {
        setmodalOpen(false);
    }, []);
    return (
        <>
            <div className={cx('wrapper')} onClick={() => (modalOpen ? close() : open())}>
                <button className={cx('icon-setting')}>
                    <ThemeIcon />
                </button>
                {!modalOpen && <span className={cx('setting_item-title')}>Chủ đề</span>}
            </div>

            <AnimatePresence initial={false} onExitComplete={() => null}>
                {modalOpen && <ThemePortal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
        </>
    );
}

export default ItemTheme;
