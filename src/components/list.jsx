// import React, { useEffect, useState } from 'react';
// import "./list.css";

// const List = () => {
//     const [products, setProducts] = useState([]);

//     const init = async () => {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         setProducts(data);
//     }

//     useEffect(() => {
//         init();
//     }, [])



//     return (

//         <div className="grid">
//             {
//                 products.map((product, index) => {
//                     return product.id % 2 === 0 ? < div className="card" key={index} >
//                         <div className="card-image bg-amber">
//                             <img src={product.image} alt={product.title} width="100%" height={'100%'} />
//                         </div>``
//                         < div className="card-body" >
//                             <span className="origin">{product.category}</span>
//                             <p className="name">{product.title}</p>
//                             <div className="card-footer">
//                                 <span className="price">${product.price}</span>
//                             </div>
//                         </div>
//                     </div > : null
//                 })
//             }
//         </div >
//     )
// }

// export default List

