import classNames from 'classnames/bind';
import styles from './BottomSidebar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function BottomSidebar() {
    return (
        <div style={{ backgroundImage: `url(${images.imageBottomPlayer})` }} className={cx('wrapper')}>
            <h2>Bottom Player</h2>
        </div>
    );
}

export default BottomSidebar;
