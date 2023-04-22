import './BottomSidebar.scss';
import images from '~/assets/images';
import BottomControlLeft from './BottomControlLeft/BottomControlLeft';

function BottomSidebar() {
    return (
        <div style={{ backgroundImage: `url(${images.imageBottomPlayer})` }} className="player-control-main">
            <BottomControlLeft />
        </div>
    );
}

export default BottomSidebar;
