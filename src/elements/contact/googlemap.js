import React from 'react';

const Googlemap = () => (
    <div>
        <iframe
            title="Map of San Diego, California"
            src="https://www.google.com/maps?q=San%20Diego%2C%20CA&z=11&output=embed"
            width="100%"
            height="538"
            style={{ border: 0, borderRadius: '10px', display: 'block' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
        />
        <p>
            Based in San Diego, CA.{' '}
            <a href="https://www.google.com/maps/search/?api=1&query=San%20Diego%2C%20CA"
               target="_blank" rel="noopener noreferrer">
                View map
            </a>
        </p>
    </div>
);

export default Googlemap;
