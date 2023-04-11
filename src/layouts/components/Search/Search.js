import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/perspective-extreme.css';

import styles from './Search.module.scss';
import Icons from '~/components/Icons/Icons';
import SuggestionSongs from '~/components/SuggestionSongItem/SuggestionSong';

const cx = classNames.bind(styles);
const { BsSearch, MdOutlineClear } = Icons;

function Search() {
    const [openResult, setOpenResult] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    // const [showResult, setShowResult] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowResult([1, 2, 3]);
    //     }, 2000);
    // });
    const inputRef = useRef();

    const handleFocus = () => {
        setOpenResult(true);
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    // ko cho người dùng nhập dấu cách đầu tiên
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <form className={!!openResult ? cx('is-collapse') : ''}>
            <Tippy
                className={cx('wrapper-tippy')}
                animation={'perspective-extreme'}
                onClickOutside={() => setOpenResult(false)}
                visible={openResult}
                interactive={true}
                placement={'bottom-start'}
                maxWidth={'auto'}
                arrow={false}
                offset={[0, 0]}
                content={
                    <SuggestionSongs
                        // refinput={refinput}
                        // value={value}
                        // setValue={setValue}
                        setOpenResult={setOpenResult}
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/c/e/3/4/ce34451501c9e64070402a50f7660c07.jpg"
                        alt="avatar"
                    />
                }
            >
                <div className={cx('search')}>
                    <div className={cx('search-content')}>
                        <button className={cx('search-btn')}>
                            <BsSearch />
                        </button>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            className={cx('input-search')}
                            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát... "
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />

                        {!!searchValue && (
                            <span onClick={handleClear} className={cx('clear-text')}>
                                <MdOutlineClear />
                            </span>
                        )}
                    </div>
                </div>
            </Tippy>
        </form>
    );
}

export default Search;
