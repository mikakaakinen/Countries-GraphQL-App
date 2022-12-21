/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function CountryItem({
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
}) {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3
                        css={{
                            textAlign: 'center',
                            color: '#000',
                            marginBottom: '2.5rem',
                            marginTop: '2.5rem',
                            textDecoration: 'underline',
                        }}
                    >
                        {name}
                    </h3>
                </Col>
            </Row>
            <Table
                striped
                hover
                responsive
                css={{
                    border: '2px solid black',
                    color: '#000',
                    textAlign: 'center',
                    fontSize: '1.3rem',
                    fontWeight: '500',
                    width: '70%',
                    margin: '0 auto',
                }}
            >
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td>Region</td>
                        <td>{region}</td>
                    </tr>
                    <tr>
                        <td>Subregion</td>
                        <td>{subregion}</td>
                    </tr>
                    <tr>
                        <td>Population</td>
                        <td>{population}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {area}{' '}
                            <p
                                css={{
                                    display: 'inline',
                                }}
                            >
                                km
                                <span
                                    css={{
                                        verticalAlign: 'super',
                                        fontSize: 'smaller',
                                        lineHeight: 'normal',
                                    }}
                                >
                                    2
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Timezones</td>
                        <td>
                            {timezones ? (
                                timezones.map((timezone, index) => (
                                    <p
                                        key={index}
                                        css={{
                                            display: 'inline',
                                        }}
                                    >
                                        {' '}
                                        {timezone}
                                        {index < timezones.length - 1
                                            ? ',\u00A0'
                                            : ''}
                                    </p>
                                ))
                            ) : (
                                <p>No timezones found</p>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {borders ? (
                                borders.map((border, index) => (
                                    <p
                                        key={index}
                                        css={{
                                            display: 'inline',
                                        }}
                                    >
                                        {' '}
                                        {border}
                                        {index < borders.length - 1
                                            ? ',\u00A0'
                                            : ''}
                                    </p>
                                ))
                            ) : (
                                <p>No borders found</p>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Nativename</td>
                        <td>{nativeName}</td>
                    </tr>
                    <tr>
                        <td>Currencies</td>
                        <td>
                            {currencies ? (
                                currencies.map((currency, index) => (
                                    <p
                                        key={index}
                                        css={{
                                            display: 'inline',
                                        }}
                                    >
                                        {' '}
                                        {currency.name} [{currency.symbol}]
                                        {index < currencies.length - 1
                                            ? ',\u00A0'
                                            : ''}
                                    </p>
                                ))
                            ) : (
                                <p>No currencies found</p>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>
                            {languages ? (
                                languages.map((language, index) => (
                                    <p
                                        key={index}
                                        css={{
                                            display: 'inline',
                                        }}
                                    >
                                        {' '}
                                        {language.name}
                                        {index < languages.length - 1
                                            ? ',\u00A0'
                                            : ''}
                                    </p>
                                ))
                            ) : (
                                <p>No languages found</p>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Translations</td>
                        <td>
                            <p>es: {translations.es}</p>
                            <p>fr: {translations.fr}</p>
                            <p>ja: {translations.ja}</p>
                            <p>it: {translations.it}</p>
                            <p>pt: {translations.pt}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Flag</td>
                        <td>
                            <img
                                src={flag}
                                alt="flag"
                                css={{
                                    width: '60%',
                                    height: 'auto',
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}
