import React, { useEffect, useState } from 'react';

const useX = (jsonname) => {
    const [x, setX] = useState([]);

    useEffect(() => {
        fetch(`${jsonname}.json`)
            .then((res) => res.json())
            .then((data) => setX(data));
    }, []);

    return [x, setX];
};

export default useX;