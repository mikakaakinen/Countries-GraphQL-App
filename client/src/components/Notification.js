import React from 'react';

const Notification = ({ showNotification }) => {
    return (
        <div
            className={`notification-container ${
                showNotification ? 'show' : ''
            }`}
        >
            <h5>No countries found</h5>
        </div>
    );
};

export default Notification;
