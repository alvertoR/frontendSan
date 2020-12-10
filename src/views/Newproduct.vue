<template>
    <div>
        <Button @click="back()" type="circle">
            <img src="../assets/landing/back.svg" />
        </Button>
        <h2>Datos del producto</h2>
        <form action="">
            <label for="nombre">
                <p>Nombre</p>
                <div class="input">
                    <input id="nombre" type="text" placeholder="Ej...Jabón rey, Huevos, Arroz">
                </div>
            </label>
            <label for="precio">
                <p>Precio</p>
                <div class="input">
                    <input id="precio" type="text" placeholder="Ej...1000, 15000, 30000">
                </div>
            </label>
            <label for="categoria">
                <p>Categoria</p>
                <div class="input">
                    <div class="box">
                        <select id="categoria" >
                            <option value="">Seleccione una categoria</option>
                            <option value="">Aseo</option>
                            <option value="">Lacteos</option>
                            <option value="">Licores</option>
                        </select>
                    </div>                    
                </div>
            </label>
            <div class="load">
                <label for="imagen">
                    <p>Cargar Imagen</p>
                    <div class="button-file">
                        <img src="../assets/landing/file.svg" />
                    </div>
                    <input type="file" name="" id="imagen">
                </label>
            </div>
            <div class="normal-button">
                <Button type="normal">
                    <p>Guardar</p>
                </Button>
            </div>            
        </form>
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
    methods:{
        back(){
            this.$router.push({ path: '/user' });
        }
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
    margin:8vw auto;
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
    margin-top:-2vw;
}
</style>