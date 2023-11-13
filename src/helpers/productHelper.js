import productData from '../Config/Products.json';

function getProduct(id) {
    for (let i=0; i < productData.length; i++) {
        let product = productData[i];
        if (product.id === id) {
            return product;
        }
    }
    return null;
}

export default getProduct;