import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './ItemLogin.module.scss';
import Tippy from '@tippyjs/react';

import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';
import config from '~/config';
import MenuItemLogin from '~/components/Popper/MenuItemLogin/MenuItemLogin';
const cx = classNames.bind(styles);

function ItemLogin({ items = [] }) {
    const currentUser = true;

    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };
    const LoginPortal = ({ visible, items }) => {
        return items.map((item, index) => {
            return <MenuItemLogin key={index} data={item} />;
        });
    };
    return (
        <div>
            <Tippy
                animation={'perspective-extreme'}
                className={cx('wrapper-tippy')}
                visible={visible}
                onClickOutside={() => setVisible(false)}
                interactive={true}
                arrow={false}
                offset={[0, 10]}
                placement="bottom-end"
                content={<LoginPortal setVisible={setVisible} items={items} />}
            >
                <div className={cx('wrapper')} onClick={handleClick}>
                    {currentUser ? (
                        <Image
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0cd7b544f3c36a1f9f7feee93b1cff51~c5_100x100.jpeg?x-expires=1681531200&x-signature=dTK8%2Fa87A1K5BWk6KiqXxr1I%2BaY%3D"
                            className={cx('user-avatar')}
                            alt="Image error"
                            // fallback là trường hợp ảnh lỗi thì sẽ lấy ảnh khác
                            fallback="https://lh3.googleusercontent.com/a/AGNmyxaVEA7i_t9VAM1eSW1S1luWUcJ2QLZ3SQYijGY0ag=s288"
                        />
                    ) : (
                        <Button className={cx('login-btn')} to={config.routes.login} primary rounded>
                            Đăng nhập
                        </Button>
                    )}
                    {!!currentUser && !visible && <span className={cx('setting_item-title')}>Cá Nhân</span>}
                </div>
            </Tippy>
        </div>
    );
}

export default ItemLogin;
