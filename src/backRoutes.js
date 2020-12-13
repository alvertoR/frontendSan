let urlBack = 'http://localhost:3000/omarSan/';

const routesApi = {
    getProducts:   `${urlBack}product/products`,
    getProduct:    `${urlBack}product/product/`, // + ID product
    addProduct:    `${urlBack}product/newProduct`,
    updateProduct: `${urlBack}product/updateProduct/`, //  + ID product
    loginUser:     `${urlBack}user/login`

}

export default routesApi;