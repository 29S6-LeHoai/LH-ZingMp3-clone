import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Image from '~/components/Image/Image';
import styles from './SuggestionSong.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function SuggestionSongs({ src, alt, refinput, value, setValue, setOpenResult }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <h3 className={cx('search-title')}>Tìm kiếm gần đây</h3>
                <div className={cx('search-list')}>
                    <div className={cx('list-item')}>
                        <div className={cx('media-left')}>
                            <Image className={cx('avatar')} src={src} alt={alt} />
                        </div>

                        <div className={cx('media-content')}>
                            <Link to={config.routes.nhacmoi} className={cx('media-button-wrapper')}>
                                <span className={cx('media-title')}>Ngoài 30</span>
                            </Link>
                            <span className={cx('media-subtitle')}>Thái Học</span>
                        </div>
                    </div>
                </div>

                <div className={cx('search-list')}>
                    <div className={cx('list-item')}>
                        <div className={cx('media-left')}>
                            <Image className={cx('avatar')} src={src} alt={alt} />
                        </div>

                        <div className={cx('media-content')}>
                            <Link to={config.routes.nhacmoi} className={cx('media-button-wrapper')}>
                                <span className={cx('media-title')}>Ngoài 30</span>
                            </Link>
                            <span className={cx('media-subtitle')}>Thái Học</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SuggestionSongs;
