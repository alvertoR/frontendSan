<template>
    <div>
        <header>
            <div>
                <h1>Omar San</h1>
                <div class="button">
                    <Button type="circle">
                        <img src="../assets/landing/logout.svg">
                    </Button>   
                </div>
            </div>
        </header>
        <main>
            <label for="busqueda">
                <div class="input-busqueda">
                    <img src="../assets/landing/lupa.svg">
                    <input id="busqueda" type="search" placeholder="Nombre del producto">
                </div>
            </label>
            <!--Galeria-->
            <ul class="galeria">
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
                <li>
                    <img src="../assets/rey.jpg" />
                </li>
            </ul>
            <!--Fin Galeria-->
        </main>
        <footer>
            <Button type="circle">
                <img src="../assets/landing/new.svg">
            </Button>  
        </footer>
    </div>
</template>

<script>

import Button from '../components/Button.vue';

export default {
    components:{
        Button
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
    margin:4vw auto;
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
    padding-left: 16px;
    padding-top: 8px;
}

/*Fin estilos header*/


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

footer Button{
    margin-top:-4vw;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

footer Button img{
    width: 12vw;
    height: 15vw;
}


/*Fin estilos Footer*/
</style>