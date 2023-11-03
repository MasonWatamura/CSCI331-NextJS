import { useState, useEffect } from "react";
import "./SeachBar.css"

export default function SearchBar() {
    const [filterProducts, setFilteredProducts] = useState([])
    const astyle = {width:"150px"}

    function fetchAPIData(){ 
        fetch('https://fakestoreapi.com/products?limit=20')
      .then(res=>res.json())
      .then(products=>{
        const currentFilter = products.map((product, index) => {
            return (
                <div class="prodStyle">
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <img style={astyle} src={product.image} alt={product.title} />
                </div>
            )
        })
        setFilteredProducts(currentFilter)
      })
    }

    function filter (product) {
        return product.includes()
    }

    useEffect(fetchAPIData, [])
    return (<div>
        <input type="text"/>
        <div style={{display:"flex", flexFlow:"row wrap"}}>
            {filterProducts}
        </div>
    </div>
    )
}