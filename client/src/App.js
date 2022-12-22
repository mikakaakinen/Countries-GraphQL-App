import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import Countries from './components/Countries';
import Footer from './components/Footer';
import SearchForm from './components/Form';
import Header from './components/Header';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
});

// const client = ...

function App() {
    return (
        <ApolloProvider client={client}>
            <div
                style={{
                    minHeight: 'calc(100vh - 80px)',
                    backgroundColor: '#e8e8e8',
                    paddingBottom: '35px',
                }}
            >
                <Header />
                <SearchForm />
                <Countries />
            </div>
            <Footer />
        </ApolloProvider>
    );
}

export default App;
