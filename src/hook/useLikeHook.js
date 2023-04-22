import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const useLikeHook = (item, type) => {
    // const { id, activeUser } = useSelector((state) => state.users);

    // fake user
    const activeUser = true;

    const [isLike, setLike] = useState(false);
    const [doc, setDoc] = useState([]);

    const handleLike = () => {
        //  khi chưa đăng nhập
        if (!activeUser) {
            return toast('Bạn cần phải đăng nhập!', {
                type: 'info',
            });
        }

        // khi đã đăng nhập
        if (activeUser) {
            // add like
            if (!isLike) {
                try {
                    toast('Thêm vào thư viện yêu thích thành công!', { type: 'success' });
                    setLike(true);
                } catch (error) {
                    console.log(error);
                    toast('Lỗi thêm vào thư viện yêu thích!', { type: 'error' });
                }
            }

            // remove like
            if (isLike) {
                setLike(true);
                try {
                    toast('Xóa khỏi thư viện yêu thích thành công!', { type: 'info' });
                    setLike(false);
                } catch (error) {
                    console.log(error);
                    toast('Lỗi xóa khỏi thư viện yêu thích!');
                }
            }
        }
    };
    return { isLike, handleLike };
};

export default useLikeHook;
