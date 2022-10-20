import React, { useEffect, useState } from "react";
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component";

const Card = () => {
    const [items, setItems] = useState([])
    const [next, setNext] = useState('')

    const fetchData = async () => {
        const data = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        setItems(data?.data.results);
        setNext(data?.data.next)
    }
    const fetchMoreData = () => {
        setTimeout(async () => {
            const data = await axios.get(`${next}`)
            setItems(items.concat(data?.data?.results));
            setNext(data?.data.next)
        }, 1500)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {items.map(({ name }) => {
                    return (<div style={{width: '18rem'}}>
                        <div className="card m-3">
                            <div className="card-body">
                                <p className="text-uppercase card-title">{name}</p>
                            </div>
                        </div>
                    </div>)
                })}
            </InfiniteScroll >
        </>
    )
}

export default Card

