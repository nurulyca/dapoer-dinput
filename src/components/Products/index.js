import React from 'react';
import { ProductsContainer, ProductWrapper, ProductsHeading, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from './ProductsElement';
import { addToCart } from '../../redux/Shopping/shopping-actions'


import { connect, useDispatch } from 'react-redux';

const Products = ({ heading, data }) => {
    const dispatch = useDispatch()
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data && data.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton onClick={() => {
                                    dispatch(addToCart(product.id))
                                }}>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    );
};

const mapStateToProps = state => {
    return {
        products: state.shop.products,
    };
}

export default connect(mapStateToProps)(Products);
