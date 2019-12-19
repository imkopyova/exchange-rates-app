import React from "react";
import styles from './currencyCard.less';

export const CurrencyCard = props => {
    const {name, value} = props;
    return <div className="currency-card--container">
        <p>{name}</p>
        <p>{value}</p>
    </div>;
};
