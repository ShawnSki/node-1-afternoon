const express = require('express');

const products = require('../products');

const getProduct = (req, res) => {
    const item = products.find(val => val.id === parseInt(req.params.id));
    if (!item) {
        res.status(500).send('Item not in list');
    }
    res.status(200).send(item);
}

module.exports = getProduct;