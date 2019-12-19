import React from "react";
import styles from './layout.less';

export const Layout = props => {
    const { title, search, info, cards } = props;
    return <div className="layout--container">
        <div className="layout-title">{title}</div>
        <div className="layout--search">{search}</div>
        <div className="layout--info">{info}</div>
        <div className="layout--cards">{cards}</div>
    </div>;
};
