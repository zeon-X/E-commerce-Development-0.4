import React, { useEffect, useState } from 'react';

const useFooterInfo = () => {
    const [footerInfos, setFooterInfos] = useState([]);

    useEffect(() => {
        fetch('footerinfo.json')
            .then((res) => res.json())
            .then((data) => setFooterInfos(data));
    }, []);

    return [footerInfos, setFooterInfos];
};

export default useFooterInfo;