import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { publicRoutes } from '~/routers';
import MainLayout from '~/layouts/MainLayout/MainLayout';
import { useSelector } from 'react-redux';

function App() {
    // dữ liệu vào
    const queueNowPlaySelector = useSelector((state) => state.queueNowPlay);
    const settingSelector = useSelector((state) => state.setting);

    // set localStorage
    useMemo(() => {
        const queueNowPlay = JSON.parse(localStorage.getItem('queue_nowplay'));
        const setting = JSON.parse(localStorage.getItem('hlmp3_setting'));

        if (!queueNowPlay) {
            localStorage.setItem('queue_nowplay', JSON.stringify(queueNowPlaySelector));
            console.log(queueNowPlay.action);
        }

        if (!setting) {
            localStorage.setItem('hlmp3_setting', JSON.stringify(settingSelector));
        }
    }, []);

    useEffect(() => {
        window.addEventListener('load', () => {
            document.querySelector('.loadings')?.remove();
        });
    }, []);
    return (
        <>
            <div className="loadings">
                <div className="loader">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                </div>
            </div>

            <Router>
                <div>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = MainLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={5}
            ></ToastContainer>
        </>
    );
}

export default App;
