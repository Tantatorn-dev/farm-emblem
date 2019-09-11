<template>
    <img v-if="name=='L'" src="../../assets/lancer.png">
    <img v-else-if="name=='S'" src="../../assets/swordman.png">
    <img v-else-if="name=='A'" src="../../assets/axe.png">
    <img v-else-if="name=='l'" src="../../assets/lancerenemy.png">
    <img v-else-if="name=='s'" src="../../assets/swordmanenemy.png">
    <img v-else-if="name=='a'" src="../../assets/axeenemy.png">
</template>

<script>
export default {
    name: "Character",
    props: {
        name: String,
    }
}
</script>

<style scoped>
    img{
        width: 60px;
        height: 60px;
    }
</style>