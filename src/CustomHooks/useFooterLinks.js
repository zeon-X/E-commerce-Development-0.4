import React, { useEffect, useState } from 'react';

const useFooterLinks = () => {
    const [footerLinks, setFooterLinks] = useState([]);

    useEffect(() => {
        fetch('social.json')
            .then((res) => res.json())
            .then((data) => setFooterLinks(data));
    }, []);

    return [footerLinks, setFooterLinks];
};

export default useFooterLinks;