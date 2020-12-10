let urlBack = 'http://localhost:3000/omarSan/product';

const routesApi = {
    getProducts:   `${urlBack}/products`,
    getProduct:    `${process.env.URL_API}/product/`, // + ID product
    addProduct:    `${process.env.URL_API}/newProduct`,
    updateProduct: `${process.env.URL_API}/updateProduct/` //  + ID product
}

export default routesApi;