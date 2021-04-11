import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);
    
    // const handleAdd = () => {
    //     setCategories( (cats) => [...cats, 'Hunter']);
    // }


    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                { 
                    categories.map( (category, i) => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;