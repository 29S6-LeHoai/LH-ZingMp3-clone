import { motion } from 'framer-motion';
import Icons from '~/components/Icons/Icons';

import { themes } from '~/components/NavBar/data/dataTheme';
import ThemeItem from './ThemeItem';
import '~/assets/styles/styles.scss';

const { AiOutlineClose } = Icons;

function ThemePortal(props) {
    const { handleClose } = props;

    const handleClickBackdrop = (e) => {
        if (e.target.id === 'modal' || e.target.id === 'theme-overlay') {
            console.log(123);
            return handleClose();
        }
    };

    const dropIn = {
        hidden: {
            y: '-100vh',
            opacity: 0,
        },
        visible: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 0.3,
                type: 'spring',
                damping: 25,
                stiffness: 300,
            },
        },
        exit: {
            y: '-100vh',
            opacity: 0,
        },
    };

    return (
        <motion.div
            inherit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" zm-portal-modal theme-modal-overlay"
            id="theme-overlay"
            onClick={handleClickBackdrop}
        >
            <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="modal theme-modal is-active"
            >
                <div role="presentation" className="modal-background">
                    <div className="modal-content">
                        <button className="modal-icon-btn">
                            <AiOutlineClose onClick={handleClickBackdrop} id="modal" className="modal-icon-close" />
                        </button>
                        <h3 className="modal-title">Giao diện</h3>
                        <div className="container">
                            {themes.map((e, index) => {
                                return <ThemeItem key={index} item={e} />;
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ThemePortal;
