import { memo } from 'react';
import { toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Link, useNavigate } from 'react-router-dom';

import getCounterTimeRecently from '~/ultis/getCounterTimeRecently';
import Icons, { ActionIcon, LoadingIcon } from '~/components/Icons/Icons';
import useLikeHook from '~/hook/useLikeHook';
import './NewMusicPage.scss';
import { setPlay, setReady } from '~/features/SettingPlay/settingPlay';
import { fetchPlayList, playSongNotAlbum } from '~/features/QueueFeatures/QueueFeatures';

const { AiOutlineHeart, AiFillHeart, MdOutlineMoreHoriz, IoPlay } = Icons;

function NewReleaseItem({ item, isArtist, isDisk, isRadio }) {
    // truyền dữ liệu
    const dispath = useDispatch();

    // điều hướng tới
    const navigate = useNavigate();

    let { isLike, handleLike } = useLikeHook(item, isDisk ? 1 : 2);

    const img = item?.thumbnailM?.slice(item?.thumbnailM.lastIndexOf('/'));
    const timeRelease = getCounterTimeRecently(item?.releaseDate, item?.isAlbum);

    const currentEncodeId = useSelector((state) => state.queueNowPlay.currentEncodeId);
    const playlistEncodeId = useSelector((state) => state.queueNowPlay.playlistEncodeId);

    const { playing, isReady } = useSelector((state) => state.setting);

    let active = item?.encodeId === currentEncodeId;
    let activeAlbum = playlistEncodeId === item?.encodeId;

    const handleClickPlay = () => {
        if (item?.streamingStatus === 2) {
            return toast('Dành Cho Tài Khoản VIP', {
                type: 'info',
            });
        }

        if (isRadio) {
            return toast('Radio đang trong quá trình phát triển, Vui lòng thông cảm!', {
                type: 'info',
            });
        }

        // // nếu bài hát ko thuộc vào 1 album nào
        if (isArtist) {
            const handle = async () => {
                dispath(setReady(false));
                dispath(setPlay(false));
                await dispath(fetchPlayList(item?.encodeId));
                dispath(setPlay(true));
            };
            handle();
        }

        // nếu bài hát thuộc ko album
        if (!isDisk) {
            const handleAlbum = async () => {
                dispath(setReady(false));
                dispath(setPlay(false));
                await dispath(playSongNotAlbum(item));
                dispath(setPlay(true));
            };

            handleAlbum();
        }

        // nếu bài hát thuộc album
        if (isDisk) {
            const handle = async () => {
                navigate(`/album/${item?.encodeId}`);
                dispath(setReady(false));
                dispath(setPlay(false));
                await dispath(fetchPlayList(item?.encodeId));
                dispath(setPlay(true));

                // // nếu là 1 playlist thì hiển thị màn hình play list
                // if (item.textType === 'Playlist') {
                //     dispath(pushPlayListsLogged(item));
                // }
            };
            handle();
        }
    };
    return (
        <div
            className={`player_queue-item ${activeAlbum ? 'active-album' : ''} ${active ? 'active' : ''} ${
                isArtist ? 'is-artist' : ''
            } ${isDisk ? 'is-disk' : ''}`}
        >
            <div className="player_queue_item-left">
                <div className="relative z-[1]">
                    {/* img song */}
                    <div className="player_queue-left">
                        {!isArtist && (
                            <LazyLoadImage
                                visibleByDefault={item?.thumbnailM === img}
                                className="player_queue-img"
                                src={item?.thumbnailM}
                                alt={item?.title}
                            />
                        )}

                        {isArtist && (
                            <LazyLoadImage className="player_queue-img" src={item?.thumbnailM} alt={item?.title} />
                        )}

                        <div
                            className="player_queue-img-hover"
                            onClick={(e) => {
                                if (!isDisk) return;

                                // nếu bấm vào ảnh là album thì chuyển tới album
                                if (e.target.className.includes('player_queue-img-hove')) {
                                    navigate(`/album/${item?.encodeId}`);
                                }
                            }}
                        >
                            {!active && !activeAlbum && (
                                <span className="player_queue-play-icon" onClick={handleClickPlay}>
                                    <IoPlay />
                                </span>
                            )}

                            {(active || activeAlbum) && (
                                <>
                                    {isReady && (
                                        <>
                                            {!playing && (
                                                <span onClick={() => dispath(setPlay(true))}>
                                                    <IoPlay />
                                                </span>
                                            )}

                                            {playing && (
                                                <span
                                                    style={{
                                                        backgroundImage: `url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif')`,
                                                    }}
                                                    onClick={() => dispath(setPlay(false))}
                                                ></span>
                                            )}
                                        </>
                                    )}

                                    {!isReady && <LoadingIcon notLoading />}
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* info song */}
                <div
                    className={`player_queue-music-info  ${
                        item?.streamingStatus === 1 ? '' : item.streamingStatus === 2 ? 'isVip' : ''
                    }`}
                >
                    {!isArtist && (
                        <div className="player_queue-music">
                            {item?.title}
                            <div className="is-vip_img"></div>
                        </div>
                    )}

                    {!isRadio && !isArtist && (
                        <>
                            <div className="player_queue-name-artist">
                                {item?.artists?.slice(0, 3)?.map((e, index) => {
                                    let pra = ',';

                                    if (index === 2) {
                                        pra = '...';
                                    }

                                    if (item?.artists?.length === 1) {
                                        pra = '';
                                    }
                                    if (item?.artists?.length === 2 && index === 1) {
                                        pra = '';
                                    }
                                    if (item?.artists?.length === 3 && index === 2) {
                                        pra = '';
                                    }

                                    return (
                                        <span key={index}>
                                            <Link to={`/nghe-si/${e.alias}/`}>{e.name}</Link>
                                            {pra}
                                        </span>
                                    );
                                })}
                            </div>

                            <div className="play_queue-time">{timeRelease} trước</div>
                        </>
                    )}
                </div>
            </div>

            {/* more */}
            {!isRadio && !isArtist && (
                <div className="player_queue_item-right player_btn">
                    <div className="player_queue-btn" onClick={handleLike}>
                        {isLike ? <AiFillHeart className="icon" /> : <AiOutlineHeart />}
                        <span className="play_title-hover">{`${isLike ? 'Xóa khỏi' : 'Thêm vào'}`} thư viện</span>
                    </div>

                    <div className="player_queue-btn">
                        <MdOutlineMoreHoriz className="icon" />
                        <span className="play_title-hover">Xem thêm</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(NewReleaseItem);
