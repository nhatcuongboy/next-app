import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        console.log('Heaaaaaa')
    }, [])
    return (
        <div>
            Header
        </div>
    );
};

export default Header;