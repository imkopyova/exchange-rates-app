import React from 'react';
import { Layout } from './components/layout/Layout';
import { Search } from './components/search/Search';
import { Info } from './components/info/Info';
import { CurrencyCard } from './components/currency-card/CurrencyCard';
import styles from './app.less';

function App() {
    const cards = (<>
        <CurrencyCard name="USD" value="1.1117"/>
        <CurrencyCard name="USD" value="1.1117"/>
    </>)
    return (
        <div className="app">
            <Layout
                title={<h1>Foreign exchange rates</h1>}
                search={<Search />}
                info={<Info />}
                cards={cards}
            />
        </div>
  );
}

export default App;
