import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);
    console.log(images, loading);

    return (
        <>
            { loading && <p className="card animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                    { 
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }    
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}

export default GifGrid
