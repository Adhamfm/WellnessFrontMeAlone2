import React from 'react'
import ProductCard from '../../components/productCard'
import { Grid } from '@mui/material'
import NavBar from '../../components/layout/NavBar/NavBar'


export default function Products() {
    return (
        <>
        <NavBar/>
            <h1>PRODUCTS</h1> <br />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs="auto">
                    <ProductCard />
                </Grid>
                <Grid item xs="auto">
                    <ProductCard />
                </Grid>
                <Grid item xs="auto">
                    <ProductCard />
                </Grid>
                <Grid item xs="auto">
                    <ProductCard />
                </Grid>
                <Grid item xs="auto">
                    <ProductCard />
                </Grid>
                <Grid item xs="auto">
                    <ProductCard />
                </Grid>
                <Grid item xs="auto">
                    <ProductCard />
                </Grid>
                <Grid item xs="auto">
                    <ProductCard />
                </Grid>
            </Grid>
        </>
    )
}