import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import { memo, useLayoutEffect, useState } from 'react';

import styles from './NewMusicPage.scss';
import { useGetHomePage } from '~/apis/getHome';
import NewReleaseItem from './NewReleaseItem';

const cx = classNames.bind(styles);

const NewMusicPage = memo(() => {
    const [dataNewMusic, setDataNewMusic] = useState(null);
    const [selectList, setSelectList] = useState(false);
    const { data, status } = useGetHomePage();
    const dataSelector = data?.data?.items.find((e) => {
        return e.sectionType === 'new-release';
    });

    useLayoutEffect(() => {
        if (dataSelector) {
            setDataNewMusic(dataSelector?.items);
        }
    }, [status]);

    const SongList = memo(() => {
        if (!dataNewMusic) return;
        const dataSong = dataNewMusic?.vPop;
        const colSong1 = dataSong?.slice(0, 4);
        const colSong2 = dataSong?.slice(4, 8);
        const colSong3 = dataSong?.slice(8, 12);
        return (
            <div className="row">
                <div className="col l-4 m-6 c-9">
                    {colSong1 && colSong1.map((e) => <NewReleaseItem key={uuidv4()} item={e} />)}
                </div>

                <div className="col l-4 m-6 c-9">
                    {colSong2 && colSong2.map((e) => <NewReleaseItem key={uuidv4()} item={e} />)}
                </div>

                <div className="col l-4 m-6 c-9">
                    {colSong3 && colSong3.map((e) => <NewReleaseItem key={uuidv4()} item={e} />)}
                </div>
            </div>
        );
    });
    return (
        <div>
            <h3 className={cx('new-music-title')}>{dataSelector?.title}</h3>
            <SongList />
        </div>
    );
});

export default NewMusicPage;
