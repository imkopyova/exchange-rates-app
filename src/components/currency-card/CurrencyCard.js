import React from "react";
import styles from './currencyCard.less';

export const CurrencyCard = props => {
    const {name, value, onDelete} = props;
    return <div className="currency-card--container">
        <p className="currency-card--name">{name}</p>
        <p className="currency-card--value">{value}</p>
        <button className="currency-card--delete" onClick={() => onDelete(name)} />
    </div>;
};
