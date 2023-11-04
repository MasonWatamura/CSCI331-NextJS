import { useState, useEffect } from "react";
import "./SeachBar.css"

export default function SearchBar() {
    const [filterProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])

    function fetchAPIData(){ 
        fetch('https://fakestoreapi.com/products?limit=20')
      .then(res=>res.json())
      .then(products=>{
        const filtered = products.filter((list)=>{return list.title.toLowerCase().includes(searchString.toLowerCase())})
        const currentFilter = filtered.map((product, index) => {
            return (
                <div class="prodStyle" key={index}>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <img style={{width:"100px"}} src={product.image} alt={product.title} />
                </div>)
        })
        setFilteredProducts(currentFilter)
      })
    }

    function handleChange(event) {
        setSearchString(event.target.value)
    }
    
    return (<div>
        <input type="text" value={searchString} onChange={handleChange}/>
        <div style={{display:"flex", flexFlow:"row wrap"}}>
            {filterProducts}
        </div>
    </div>
    )
}