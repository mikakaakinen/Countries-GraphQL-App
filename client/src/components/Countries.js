/** @jsxRuntime classic */
/** @jsx jsx */
import { gql, useLazyQuery } from '@apollo/client';
import { jsx } from '@emotion/react';
import React, { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { showNotification as show } from '../helpers/helpers';
import CountryItem from './CountryItem';
import Notification from './Notification';

const GET_COUNTRIES = gql`
    query Country($country: String!) {
        countries(name: $country) {
            name
            capital
            region
            subregion
            population
            area
            timezones
            borders
            nativeName
            currencies {
                code
                name
                symbol
            }
            languages {
                iso639_1
                iso639_2
                name
                nativeName
            }
            translations {
                de
                es
                fr
                ja
                it
                br
                pt
            }
            flag
        }
    }
`;

function Countries({ country }) {
    const [showNotification, setShowNotification] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [searchCountries, { called, loading, error, data }] = useLazyQuery(
        GET_COUNTRIES,
        {
            variables: { country: query },
        }
    );
    const [countries, setCountries] = React.useState([]);

    useEffect(() => {
        if (country) setQuery(country);
        if (!query) return;
        // function for executing query doesn't return a promise
        searchCountries();
        if (data) {
            setCountries(data.countries);
            console.log('Data is =', data.countries);
        } else {
            show(setShowNotification);
        }
    }, [country, query, data, searchCountries]);

    if (called && loading)
        return (
            <ReactLoading
                type={'spin'}
                color={'blue'}
                height={'100px'}
                width={'100px'}
                css={{
                    position: 'fixed',
                    top: '40%',
                    left: '10%',
                }}
            />
        );

    if (error) return <Notification showNotification={showNotification} />;

    return country
        ? countries.map(
              (
                  {
                      name,
                      capital,
                      region,
                      subregion,
                      population,
                      area,
                      timezones,
                      borders,
                      nativeName,
                      currencies,
                      languages,
                      translations,
                      flag,
                  },
                  index
              ) => (
                  <CountryItem
                      key={index}
                      name={name}
                      capital={capital}
                      region={region}
                      subregion={subregion}
                      population={population}
                      area={area}
                      timezones={timezones}
                      borders={borders}
                      nativeName={nativeName}
                      currencies={currencies}
                      languages={languages}
                      translations={translations}
                      flag={flag}
                  />
              )
          )
        : null;
}

export default Countries;
