import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { tmdAPI } from '~/configApi';

export function useGetHomePage() {
    return useQuery(
        ['getHotKey'],
        async () => {
            const data = await axios.get(tmdAPI.getHomePage());
            return data.data;
        },
        { keepPreviousData: true },
    );
}

const getHomePage = async () => {
    const res = await axios.get(tmdAPI.getHomePage());
    return res.data;
};

export default getHomePage;

// import axios from '~/axios';

// export const getHomeAPI = () =>
//     new Promise(async (resolve, reject) => {
//         try {
//             const response = await axios({
//                 url: '/home',
//                 method: 'get',
//             });
//             resolve(response);
//         } catch (error) {
//             reject(error);
//         }
//     });
