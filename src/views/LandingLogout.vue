<template>
    <div>
        <header>
            <div>
                <h1>Omar San</h1>
                <div class="button">
                    <Button @click="popUp()" type="circle">
                        <img src="../assets/landing/longin.svg">
                    </Button>
                    <!--Modal-->
                    <div class="bg-modal">
                        <div class="login" v-if="loginModal == true">
                            <img class="userImg" src="../assets/landing/loginUser.svg" />
                            <img @click="closePopUp()" class="close" src="../assets/landing/close.svg" />
                            <form @submit.prevent="loginUser(userLogin)">
                                <label for="nombre">
                                    <p>Nombre</p>
                                    <div class="input">
                                        <input id="nombre" v-model="userLogin.name" type="text" placeholder="Nombre de usuario">
                                    </div>
                                </label>
                                <label for="contrasena">
                                    <p>Contraseña</p>
                                    <div class="input">
                                        <input id="contrasena" v-model="userLogin.password" type="password" placeholder="Contraseña">
                                    </div>
                                </label>
                                <Button type="alert">
                                    <p>Ingresar</p>
                                </Button>
                            </form>
                        </div>
                        <div class="login" v-if="loginModal == false">
                            <div class="noMama">
                                <img src="../assets/landing/sad.svg" />
                                <p>You're no Mamá</p>
                                <Button @click="byePop()" type="alert">
                                    <p>Bye</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <!--Fin moodal-->
                </div>
            </div>
        </header>
        <main>
            <label for="busqueda">
                <div class="input-busqueda">
                    <img src="../assets/landing/lupa.svg">
                    <input v-model="searchProduct" type="search" placeholder="Nombre del producto">
                </div>
            </label>
            <!--Galeria-->
            <ul class="galeria">
                <li v-for="product in searchProducts" @click="showProduct(product)">
                    <img :src="product.ulrImg" alt="Imagen de un producto"/>
                </li>
            </ul>
            <!--Fin Galeria-->
        </main>
        <footer>
            <p>Desarrollado por Alverto R.</p>
        </footer>
    </div>
</template>

<script>

import Button    from '../components/Button.vue';
import routesApi from '../backRoutes';

export default {
    data(){
        return{
            products:[],
            searchProduct: '',
            userLogin:{
                name:'',
                password:''
            },
            loginModal: true
        }
    },
    components:{
        Button
    },
    methods:{
        getProducts(){
            const listProducts = [];

            this.axios.get(routesApi.getProducts)
            .then((res) => {
                let products = res.data.data;
                console.log(products);
                products.map((value) => {
                    listProducts.push({
                        id:       value._id,
                        name:     value.name,
                        price:    value.value,
                        ulrImg:   value.picture,
                        category: value.category
                    });
                });

            });

             this.products = listProducts;

        },
        showProduct(values){

            let slug = values.name.replace(" ",'-');
            
            this.$router.push({
                name:"producto",
                params: {
                    slug,
                    img:      values.ulrImg,
                    name:     values.name,
                    price:    values.price,
                    category: values.category,
                    id:    values.id
                }
            });
        },
        popUp(){
            document.querySelector('.bg-modal').style.display = "flex";
        },
        closePopUp(){
            document.querySelector('.bg-modal').style.display = "none";
            this.userLogin.name     = '';
            this.userLogin.password = '';
        },
        byePop(){
            document.querySelector('.bg-modal').style.display = "none";
            this.userLogin.name     = '';
            this.userLogin.password = '';
            this.loginModal         = true;
        },
        loginUser(data){
            this.axios.post(routesApi.loginUser, data).then(res => {
                let reply = res.data.data;
                
                if(reply){

                    let session = true;
                    localStorage.setItem("session", session);

                    this.$router.push({ path: '/user' });
                }else{
                    this.loginModal = false;
                }

            });
        },
        sessionExists(){
            let session = localStorage.getItem("session")
            if(session){
                this.$router.push({ path: '/user' });
            }
        }
    },
    computed:{
        searchProducts: function(){
            return this.products.filter((product) => {
                return product.name.includes(this.searchProduct);
            });
        },        
    },
    mounted(){
        this.sessionExists();
        this.getProducts();
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

body{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

/*Inicio estilos header*/
header div h1{
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #000000;
    font-size: 9vw;
    padding-left: 25vw;
}

header div{
    margin:5vw auto;
    width: 95vw;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}


img{
    width: 10vw;
    height: 10vw;
}

.button{
    width: 15vw;
    height: 15vw;
}

.button Button{
    padding-right: 12px;
}

.button Button:focus{
    outline: none;
    border:none;
}

/*Fin estilos header*/

/*Inicio estilos popUp*/
.bg-modal{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0,0.2);
    position: fixed;
    top: 0;
    left:0;
    margin-top:0;
    z-index:9;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}

.login{
    position:relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color:#ffffff;
    height: 100vw;
    border: 1px solid #D47312;
    border-radius: 6vw;
}

.login .userImg{
    width: 40vw;
    height: 25vw;
}

.login .close{
    position:absolute;
    top:56px;
    right:56px;
}

.login form{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

label p{
    margin:0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 5vw;
    color: #000000; 
    padding-left: 2vw;
}

.input{
    color: rgba(9, 75, 75, 0.7);
    padding-left: 5vw;
    width: 80vw;
    border-radius: 12vw;
    height: 7.5vw;
    font-size: 4vw;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 300;
    outline:none;
    border: 1px solid rgba(255, 128, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.input input[type="text"],
.input input[type="password"]{
    width: 77vw;
    height: 5vw;
    font-size: 4vw;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 300;
    outline:none;
    border:none;
}

.input input[type="text"]:focus{
    outline:none;
    border: none;
}


.login Button p{
    margin:0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 6vw;
    color:#fff;
}

.noMama{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.noMama img{
    width: 50vw;
    height: 40vw;
}

.noMama > p{
    font-size: 10vw;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 300;
}


/*Fin estilos popUp */

/*Inicio estilos main content*/
label .input-busqueda{
    border: 1px solid rgba(255, 128, 0, 0.8);
    border-radius: 15vw;
    width: 80vw;
    margin:0 auto;
    display:flex;
    flex-direction: row;
    align-items: center;
}

.input-busqueda input[type="search"]{
    color: rgba(9, 75, 75, 0.7);
    width: 80vw;
    border-radius: 12vw;
    height: 9.5vw;
    font-size: 6vw;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 300;
    outline:none;
    border: none;
}

.input-busqueda input[type="search"]:focus{
    outline:none;
    border: none;
}

.input-busqueda img{
    width: 6vw;
    padding-left:4vw;
    padding-right: 1.5vw;
}

/*Inicio estilos galeria*/
.galeria{
    width: 80vw;
    height: 112.5vw;
    margin:5vw auto;
    list-style: none;
    display:flex;
    flex-direction: row;
    justify-content: space-between;    
    flex-wrap: wrap;
    overflow-y: scroll;
}

.galeria li{
    width: 38vw;
    height: 32vw;
    margin-top:5vw;
    border: 1px solid #FF8000;
    box-shadow: 0px 4px 5px rgba(9, 75, 75, 0.15);
    border-radius: 6vw;
    margin-left: -3vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.galeria li img{
    position: relative;
    object-fit: fill;
    width: inherit;
    height: 30vw; 
    border-radius: 6vw;
}

/*Fin estilos galeria*/

/*Fin estilos main content*/

/*Inicio estilos Footer*/

footer{
    display:flex;
    flex-direction: row;
    justify-content: center;
}

footer p{
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 3vw;
    color: rgba(9, 75, 75);
    margin-top:1vw;
}

/*Fin estilos Footer*/
</style>