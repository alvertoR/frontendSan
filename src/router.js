import Vue from 'vue';
export default new Vue();

//Importamos las rutas
import landing     from './views/LandingLogout';
import user        from './views/User';
import notFound    from './views/NotFound';
import newProduct  from './views/Newproduct';
import editProduct from './views/EditProduct';
import viewProduct from './views/ViewProduct';

export const routes = [
    {
        path: "/",
        component: landing
    },
    {
        path:"/user",
        component: user
    },
    {
        path:"/agregar-producto",
        component: newProduct
    },
    {
        path:"/editar-producto/:slug",
        name: "editar",
        component:editProduct
    },
    {
        path:"/producto/:slug",
        name:"producto",
        component: viewProduct
    },
    {
        path:"*",
        component: notFound
    }

]