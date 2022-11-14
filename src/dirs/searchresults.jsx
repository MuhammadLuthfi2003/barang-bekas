import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import '../styles/searchresults.css';

import ItemBox from '../mini-components/item-box';

const BASE_URL = 'https://barbek.masuk.id/api/product?search=';

function SearchResults() {
    const {keyword} = useParams();

    const [results, setResults] = useState(null);

    React.useEffect(() => {
        axios.get(BASE_URL + keyword)
        .then(res => {
            setResults(res.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    console.log(results);

    if (!results) return null;

    return (
        <>
            <div className='main'>
                <div className='search-results'>
                    <h1 className='search-results-title'>Hasil pencarian untuk: {keyword}</h1>
                    {/* <div className='search-results-wrapper'>
                        {
                            (results.length > 0) 

                            ?
                            results.map((item, index) => {
                                return (
                                    <ItemBox 
                                    key={index}
                                    image={item.image}
                                    title={item.name}
                                    price={item.price}
                                    description={item.description}
                                    itemId={item.id}
                                    // category={categoryId}
                                    />
                                )
                            })

                            :
                            <h1 className='no-item'>Tidak ada hasil untuk pencarian: {keyword}</h1>
                        }
                    </div> */}

                    {
                        (results.length > 0) 
                        ?
                        <div className='search-results-wrapper'>
                            {
                                results.map((item, index) => {
                                    return (
                                        <ItemBox 
                                        key={index}
                                        image={item.image}
                                        title={item.name}
                                        price={item.price}
                                        description={item.description}
                                        itemId={item.id}
                                        // category={categoryId}
                                        />
                                    )
                                })
                            }
                        </div>

                        :
                        <h1 className='no-item'>Tidak ada hasil untuk pencarian: {keyword}</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default SearchResults;
