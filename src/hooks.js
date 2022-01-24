import {useEffect, useState} from 'react';
import axios from "axios";

const useSearch = (query) => {
    const [state, setState] = useState({
        articles: [],
        status: 'IDLE',
        error: ''
    });

    useEffect(() => {
        axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`)
            .then(function (response) {
                const parsedReponse = [];

                for (let i=0; i<response.data[1].length; i++){
                    parsedReponse.push(
                        { id: response.data[3][i], label: response.data[1][i] }
                    )
                }
                setState({
                    articles: parsedReponse,
                    status: 'SUCCESS',
                    error: ''
                })
            })
            .catch(function (error) {
                setState({
                    articles: [],
                    status: 'ERROR',
                    error: error
                })
            });
    }, [query]);

    return state;
}

export default useSearch;