<template>
    <div>
        <Button @click="back()" type="circle">
            <img src="../assets/landing/back.svg" />
        </Button>
        <div class="container">
            <div class="picture">
                <img :src="product.imgUrl" alt="">
            </div>
            <div class="edit">
                <div class="left">
                    <h2>{{ product.name }}</h2>
                    <p>{{ '$'+product.price }}</p>
                </div>
                <div class="right" v-if="login == true">
                    <Button @click="editProductView()" type="circle">
                        <img src="../assets/landing/edit.svg" />
                    </Button>
                </div>
            </div>            
        </div>
        <footer>
            <p>Desarrollado por Alverto R.</p>
        </footer>       
    </div>
</template>

<script>
import Button from '../components/Button';

export default {
    components:{
        Button
    },
    data(){
        return{
            login: true,
            product:{
                name:      '',
                price:     '',
                imgUrl:    '',
                category:  '',
                idProduct: ''
            }
        }
    },
    methods:{
        setProduct(){
            this.product.idProduct = this.$route.params.id;
            this.product.imgUrl    = this.$route.params.img;
            this.product.name      = this.$route.params.name;
            this.product.price     = this.$route.params.price;
            this.product.category  = this.$route.params.category;
        },
        back(){
            if(this.login == true){
                this.$router.push({ path:'/user'});
            }else{
                this.$router.push({ path:'/'});
            }
        },
        editProductView(){            
            this.$router.push({
                name:"editar",
                params: {
                    slug:     this.$route.params.slug,
                    img:      this.product.imgUrl,
                    name:     this.product.name,
                    price:    this.product.price ,
                    category: this.product.category,
                    id:       this.product.idProduct
                }
            });
        }
    },
    mounted(){
        this.setProduct();
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

Button{
    margin-top:9.5vw;
    margin-left: 7vw;
}

Button img{
    width: 11vw;
    height: 15vw;
}

.container{
    width: 83vw;
    margin:0 auto;
}

.picture{
    width:83vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border:1px solid red;
    margin:5.5vw auto;
    height:80vw;
    border-radius: 5vw;
    border: 1px solid #FF8000;
    filter: drop-shadow(0px 4px 5px rgba(9, 75, 75, 0.15));
}

.picture img{
    position: relative;
    object-fit: fill;
    width: inherit;
    height: 80vw; 
    border-radius: 6vw;
}

.container h2{
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 11vw;  
    color: #094B4B;
    line-height: 9.5vw;
}

.container p{
    font-family: Quicksand;
    font-style: normal;
    font-weight: 300;
    font-size: 10vw;
    line-height: 12vw;
    color: #073D3D;
    padding-top: 5.5vw;
}

.edit{
    height: auto;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.edit .left{
    width: 80%;
    height: 100%;
}

.edit .left h2{
    font-size: 8.5vw;
}

.edit .left p{
    font-size: 10vw;
}

.edit .right{
    width: 28%;
    height: 100%;
}

.edit .right > Button{
    margin-top:14%;
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
    margin-top:15vw;
}
</style>