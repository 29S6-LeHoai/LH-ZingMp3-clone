import classNames from 'classnames/bind';

import styles from '~/components/NavBar/ItemLogin/ItemLogin.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function MenuItemLogin({ data }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <div className={cx('menu-list')}>
            <Button className={classes} to={data.to} leftIcon={data.icon}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItemLogin;
