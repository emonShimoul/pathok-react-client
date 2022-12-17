const { useState, useEffect } = require("react");

const useFetch = () => {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/books`)
            .then(res => res.json())
            .then(data => setBooksData(data))
    }, []);

    return {
        booksData
    }
}

export default useFetch;