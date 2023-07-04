import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import Loader from "./components/Loader";

import 'antd/dist/antd.min.css';
import './assets/styles/global.css';

const LazyApp = lazy(() => import("./app"));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Loader/>}>
            <LazyApp />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
