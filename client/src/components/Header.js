/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

const Header = () => {
    return (
        <header
            css={{
                fontFamily: 'Comfortaa',
                textAlign: 'center',
                paddingTop: '20px',
                paddingBottom: '10px',
                marginBottom: '35px',
                backgroundColor: '#1f3a93',
                width: '100%',
                maxWidth: '100%',
            }}
        >
            <h1
                css={{
                    marginBottom: '5px',
                    color: '#fff',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                COUNTRIES API APP
            </h1>
            <h2
                css={{
                    color: '#fff',
                }}
            >
                Made with React and GraphQL
            </h2>
        </header>
    );
};

export default Header;
