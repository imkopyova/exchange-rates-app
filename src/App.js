import React, {useState, useEffect} from 'react';
import { Layout } from './components/layout/Layout';
import { Search } from './components/search/Search';
import { Info } from './components/info/Info';
import { CurrencyCard } from './components/currency-card/CurrencyCard';
import styles from './app.less';
import { getRatesBySymbols } from "./api";

const makeCurrencyValueObject = (currency, symbol) => ({symbol, value: currency.rates[symbol]});

function App() {
    const [addedCurrencies, setAddedCurrencies] = useState([]);
    const [lastUpdated, setLastUpdated] = useState();

    const addCurrency = symbol => {
        getRatesBySymbols([symbol])
            .then(currency => {
                setAddedCurrencies([
                    ...addedCurrencies,
                    makeCurrencyValueObject(currency, symbol)
                ]);
                setLastUpdated(currency.date);
            })
            .catch(error => console.log(error));
    };

    const deleteCurrency = symbol => {
        const filteredCurrencies = addedCurrencies.filter(currency => currency.symbol !== symbol);
        setAddedCurrencies(filteredCurrencies);
    };

    const updateRates = (symbols) => {
        getRatesBySymbols([...symbols])
            .then(currency => {
                for (let symbol in symbols) {
                    setAddedCurrencies([
                        ...addedCurrencies,
                        makeCurrencyValueObject(currency, symbol)
                    ]);
                };
                setLastUpdated(currency.date);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        localStorage.setItem('exchange-rates-saved', addedCurrencies.map(item => item.symbol).join(","));
    }, [addedCurrencies]); 

    useEffect(() => {
        const symbols = localStorage.getItem('exchange-rates-saved');
        updateRates(symbols);
    }, []);

    const cards = (
        <React.Fragment>            
            {addedCurrencies.length > 0 ? addedCurrencies.map(
                (currency, index) => 
                    <CurrencyCard
                        key={index}
                        name={currency.symbol}
                        value={currency.value}
                        onDelete={deleteCurrency}
                        />
                    ) : <p>You have not added currency yet</p>
            }
        </React.Fragment>
    );
    
    return (
        <div className="app">
            <Layout
                title={<h1>Foreign exchange rates</h1>}
                search={<Search handleSearch={addCurrency} />}
                info={<Info date={lastUpdated} />}
                cards={cards}
            />
        </div>
  );
}

export default App;
