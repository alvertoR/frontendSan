<template>
    <div>
        <Button @click="back()" type="circle">
            <img src="../assets/landing/back.svg" />
        </Button>
        <!--Modal-->
        <div class="bg-modal">
            <div class="login" v-if="add == true">
                <div class="noMama">
                    <img src="../assets/landing/car.svg" />
                    <p>Producto actualizado</p>
                    <Button @click="byePop()" type="alert">
                        <p>Continuar</p>
                    </Button>
                </div>
            </div>
            <div class="login" v-if="failed == true">
                <div class="noMama">
                    <img src="../assets/landing/error.svg" />
                    <p>Algo salió mal</p>
                    <Button @click="errorPop()" type="alert">
                        <p>Cerra</p>
                    </Button>
                </div>
            </div>
        </div>
        <!--Fin moodal-->
        <h2>Datos del producto</h2>
        <form @submit.prevent="editProduct(product)">
            <label for="nombre">
                <p>Nombre</p>
                <div class="input">
                    <input id="nombre" v-model="product.name" type="text" placeholder="Ej...Jabón rey, Huevos, Arroz">
                </div>
            </label>
            <label for="precio">
                <p>Precio</p>
                <div class="input">
                    <input id="precio" v-model="product.value" type="text" placeholder="Ej...1000, 15000, 30000">
                </div>
            </label>
            <label for="categoria">
                <p>Categoria</p>
                <div class="input">
                    <div class="box">
                        <select id="categoria" v-model="product.category">
                            <option value="">Seleccione una categoria</option>
                            <option value="Bebidas">Bebidas</option>
                            <option value="Carnes frías">Carnes frías</option>
                            <option value="Cocina">Cocina</option>
                            <option value="Desechables">Desechables</option>
                            <option value="Dulcería">Dulcería</option>
                            <option value="Especial">Especial</option>
                            <option value="Galguería">Galguería</option>
                            <option value="Heladería">Heladería</option>
                            <option value="Lácteos">Lácteos</option>
                            <option value="Licores">Licores</option>
                            <option value="Medicina">Medicina</option>
                            <option value="Panadería">Panadería</option>
                            <option value="Purinas">Purinas</option>
                            <option value="Salsas">Salsas</option>
                            <option value="Utiles de aseo(Hogar)">Utiles de aseo(Hogar)</option>
                            <option value="Utiles de aseo(Personal)">Utiles de aseo(Personal)</option>
                            <option value="Víveres">Víveres</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>                    
                </div>
            </label>
            <div class="normal-button">
                <Button type="normal">
                    <p>Editar</p>
                </Button>
            </div>            
        </form>
        <footer>
            <p>Desarrollado por Alverto R.</p>
        </footer>
    </div>
</template>

<script>
import Button    from '../components/Button';
import routesApi from '../backRoutes';
export default {
    data(){
        return{
            product:{
                name:      '',
                value:     '',
                imgUrl:    '',
                category:  '',
                idProduct: ''
            },
            image:'',
            add:true,
            failed: false,
        }
    },
    components:{
        Button
    },
    methods:{
        setProduct(){
            this.product.idProduct = this.$route.params.id;
            this.product.imgUrl    = this.$route.params.img;
            this.product.name      = this.$route.params.name;
            this.product.value     = this.$route.params.price;
            this.product.category  = this.$route.params.category;
        },
        editProduct(infoProduct){
                            
            this.axios.put(`${routesApi.updateProduct}${infoProduct.idProduct}`, infoProduct).then(res => {

                let reply = res.data.state;
                let containerModal = document.querySelector('.bg-modal');
                
                if(res.data.state){                    
                    containerModal.style.display = "flex";
                    this.add = true;
                }else{
                    containerModal.style.display = "flex";
                    this.failed = true;
                }
                
            });
        },
        back(){
            let slug = this.$route.params.slug;
            
            this.$router.push({
                name:"producto",
                params: {
                    slug,
                    img:      this.product.imgUrl,
                    name:     this.product.name,
                    price:    this.product.price,
                    category: this.product.category,
                    id:       this.product.idProduct
                }
            });
        },
        sessionExists(){
            let session = localStorage.getItem("session")
            if(!session){
                this.$router.push({ path: '/' });
            }
        },
        byePop(){
            this.product.name     = '';
            this.product.price    = '';
            this.product.category = ''
            this.$router.push({ path: '/user' });
        },
        errorPop(){
            let containerModal = document.querySelector('.bg-modal');
            containerModal.style.display = "none";
            this.failed = false;
        }
    },
    mounted(){
        this.sessionExists();
        this.setProduct();
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');


Button{
    margin-top:9.5vw;
    margin-left: 7vw;
}

Button img{
    width: 11vw;
    height: 15vw;
}

h2{
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 9vw;
    text-align: center;
    color: #094B4B;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

label{
    margin-top:2vw;
}

label p{
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 5vw;
    color: #000000; 
    padding-left: 2vw;
}

.input{
    position: relative;
    color: rgba(9, 75, 75, 0.7);
    padding-left: 5vw;
    margin-top:4vw;
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

.input input[type="text"]{
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

.box select{
    position: relative;
    color: rgba(9, 75, 75, 0.7);
    width: 77vw;
    height: 5vw;
    font-size: 4vw;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 300;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline:none;
    border:none;
}

.box::before{
    content: url("../assets/landing/option.svg");
    position: absolute;
    top: 5;
    right: 40px;
    width: 24px;
    height: 24px;
    pointer-events: none;
    z-index: 9;
}

.box select option{
    font-size: 1.5vw;
    outline:none;
}

.load{
    width: 85vw;
    margin-top:8vw;
}

.load label{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.load input[type="file"]{
    display:none;
}

.button-file{
    width: 15vw;
    height: 15vw;                      
    background:#FF8000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border:none;
    cursor:pointer;
    display:flex;
    flex-direction: row;
    justify-content: center;
}

.button-file img{
    margin-top:3vw;
    width: 10vw;
    height: 10vw;
}

.normal-button{
    width: 85vw;
}

.normal-button > Button{
    margin:12vw auto;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.normal-button > Button:focus{
    outline: none;
}


Button p{
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 4.5vw;
    color: #FFFFFF;
}

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
    margin-top:3vw;
}
/*Inicio estilo modals*/
.bg-modal{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0,0.2);
    position: fixed;
    top: 0;
    left:0;
    margin-top:0;
    z-index:100;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}

.login{
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color:#ffffff;
    height: 100vw;
    width: 90vw;
    border: 1px solid #D47312;
    border-radius: 6vw;
}

.login Button{
    margin-right: 5vw;
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
    height: 100%;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.noMama img{
    width: 50vw;
    height: 40vw;
}

.noMama > p{
    font-size: 8vw;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 300;
}
/*Fin estilos modals */
</style>