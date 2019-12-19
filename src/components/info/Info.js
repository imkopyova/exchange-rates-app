import React from "react";
import styles from './info.less';

export const Info = props => {
    const { date } = props;
    return <div className="header--container">
        <p>Base currency: RU</p>
        <p>{date}</p>
    </div>;
};
