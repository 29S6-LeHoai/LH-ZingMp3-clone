import classNames from 'classnames/bind';
import styles from './RightSidebar.module.scss';

const cx = classNames.bind(styles);

function RightSidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>RightSidebar</h2>
        </aside>
    );
}

export default RightSidebar;
