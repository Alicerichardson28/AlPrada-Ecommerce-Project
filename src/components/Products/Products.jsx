import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products =[
    {id:1, name: "Headphones", description: 'Great headphones', price: '$150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZihVcyLo8OeN2qlCcYT2a25JnenslxWx4A&usqp=CAU'},
    {id:2, name: "Shoes", description: 'Running shoes', price: '$75', image: 'https://i.pcmag.com/imagery/reviews/046UyKcU86Megq3Eenq0sbo-1.1597063431.fit_lpad.size_625x365.jpg'},
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;