const express = require('express');

const products = require('../products');

const getProducts = (req, res) => {
    if(req.query.price) {
        const items = products.filter(prod => prod.price >= parseInt(req.query.price));
        return res.status(200).send(items);
    }
    res.status(200).send(products);
}

module.exports = getProducts;