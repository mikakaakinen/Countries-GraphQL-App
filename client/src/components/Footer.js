/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

const Footer = () => {
    return (
        <header
            css={{
                fontFamily: 'Comfortaa',
                textAlign: 'center',
                height: '80px',
                width: '100%',
                maxWidth: '100%',
                backgroundColor: '#1f3a93',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <h4
                css={{
                    color: '#fff',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                Made with
                <span
                    css={{
                        color: '#ff0000',
                    }}
                >
                    {' '}
                    &hearts;
                </span>{' '}
                in Riihim&auml;ki, Finland
            </h4>
        </header>
    );
};

export default Footer;
