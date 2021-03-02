import React, { Fragment } from 'react';

const MainContainer = ({ children, props }) => {
    return (
        <main className="main-container">
            <Fragment {...props}>{children}</Fragment>
        </main>
    );
};

export default MainContainer;
