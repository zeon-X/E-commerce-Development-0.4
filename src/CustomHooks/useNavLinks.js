const { useState, useEffect } = require("react");

const useNavLinks = () => {

    const [navLinks, setNavLinks] = useState([]);

    useEffect(() => {
        fetch('navlinks.json')
            .then((res) => res.json())
            .then((data) => setNavLinks(data));
    }, []);

    return [navLinks, setNavLinks];
}

export default useNavLinks;