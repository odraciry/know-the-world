import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { List } from './List';
import { CountryDetails } from './CountryDetails';
export const Roteamento = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={List} />
                <Route path='/datails/:name' Component={CountryDetails} />
            </Routes>
        </Router>
    )
}