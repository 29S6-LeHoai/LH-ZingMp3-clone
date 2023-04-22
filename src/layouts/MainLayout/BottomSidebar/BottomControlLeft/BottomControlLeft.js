import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '~/layouts/MainLayout/BottomSidebar/BottomSidebar.scss';
import useLikeHook from '~/hook/useLikeHook';
import { setOpenClass, setOpenMain } from '~/features/OpenMainFull/OpenMainFull';
import Icons from '~/components/Icons/Icons';

const { AiFillHeart, AiOutlineHeart } = Icons;

function BottomControlLeft(props) {
    const dispath = useDispatch;
    const infoSong = useSelector((state) => state.queueNowPlay.infoSongCurrent);
    const { isLike, handleLike } = useLikeHook(props, 2);
    console.log(infoSong);
    return (
        <div className="player_controls-left">
            <div className="player_controls-media">
                <div className="media_left">
                    <img className="media-avatar" src={infoSong?.thumbnail} alt={infoSong.alias} />
                    {/* <div
                        onClick={() => {
                            dispath(setOpenMain());
                            setTimeout(() => {
                                dispath(setOpenClass());
                            }, 100);
                        }}
                    >
                        <span className="material-icons-outlined">open_in_full</span>
                    </div> */}
                </div>
                <div className="media-content">
                    <span className="media_name-song">{infoSong?.title}</span>
                    <span className="media_name-artist">
                        {infoSong?.artists &&
                            infoSong?.artists.slice(0, 30).map((e, index) => {
                                let pra = ', ';

                                if (index === 2) {
                                    pra = '...';
                                } else if (infoSong?.artists.length === 1) {
                                    pra = '';
                                } else if (infoSong?.artists.length === 2 && index === 1) {
                                    pra = ' ';
                                } else if (infoSong?.artists.length === 3 && index === 2) {
                                    pra = ' ';
                                }

                                return (
                                    <span key={index}>
                                        <Link className="subtitle" to={`/nghe-si/${e.alias}/`}>
                                            {e.name}
                                        </Link>
                                        {pra}
                                    </span>
                                );
                            })}
                    </span>
                </div>

                <div className="media-right">
                    <span onClick={handleLike} className="media-right-btn player_btn">
                        {isLike ? <AiFillHeart className="icon-heart" /> : <AiOutlineHeart />}
                        <span className="media_title-hover"> {isLike ? 'Xóa khỏi' : 'Thêm vào'} thư viện</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BottomControlLeft;
