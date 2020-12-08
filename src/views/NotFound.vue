<template>
    <div>
        <div class="space">
            <img src="../assets/landing/404.svg">
            <h2>404</h2>
            <p>¡Houston! tenemos un problema</p>
            <Button type="alert">
                <p>Sáqueme de aquí</p>
            </Button>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button';

export default {
    components:{
        Button
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

.space{
    margin-top:50vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
}

.space img{
    width: 40vw;
    margin-left: 10vw;
}

.space h2{
    font-style: normal;
    font-weight: bold;
    font-size: 12vw;
    text-align: center;
    color: #073D3D;
    margin-top:2vw;
}

.space > p{
    font-style: normal;
    font-weight: normal;
    font-size: 5vw;
    text-align: center;
    color: #073D3D;
    margin-top: -7vw;
}

.space Button > p{
    font-style: normal;
    font-weight: bold;
    font-size: 4.5vw;
    text-align: center;
    color: #FFFFFF;
}



</style>