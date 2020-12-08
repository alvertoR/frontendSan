<template>
    <button @click="$emit('click', $event);" class="default-button" :style="styles">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props:{
        type: String
    },
    computed:{
        styles(){
            switch(this.type){
                case 'circle':
                    return{
                        width: '15vw',
                        height: '15vw',                      
                        background:'#FF8000',
                        'box-shadow':'0px 4px 4px rgba(0, 0, 0, 0.25)',
                        'border-radius': '50%',
                        border:'none',
                    }
                break;

                case 'alert':
                    return{
                        width: '55vw',
                        height: '15vw',                      
                        background:'#FF8000',
                        'border-radius': '8vw',
                        border:'none',
                    }
                break;

                case 'normal':
                    return{
                        width: '85vw',
                        height: '7.5vw',
                        'border-radius': '12vw',
                        background: '#FFA54A',
                        'border': '1px solid rgba(255, 128, 0, 0.6)'
                    }
                break;
            }
        }
    }
}
</script>

<style scoped>


</style>