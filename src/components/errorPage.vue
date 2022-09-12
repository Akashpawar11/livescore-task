<template>
    <div>
        <img class="gif" src="../assets/404-Page.gif" alt="">
    </div>
</template>

<script>
export default {
    name: 'errorPage'
}
</script>

<style scoped>
    body{
        background-color:white ;
    }
    .gif{
        height: auto;
        width: auto;
        border: none;
        border-radius: none;
    }
    .gif:hover{
        transform: scale(1.0);
    }
</style>