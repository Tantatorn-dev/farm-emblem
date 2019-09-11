<template>
    <img v-if="name=='L'" src="../../assets/character/lancer.png">
    <img v-else-if="name=='S'" src="../../assets/character/swordman.png">
    <img v-else-if="name=='A'" src="../../assets/character/axe.png">
    <img v-else-if="name=='l'" src="../../assets/character/lancerenemy.png">
    <img v-else-if="name=='s'" src="../../assets/character/swordmanenemy.png">
    <img v-else-if="name=='a'" src="../../assets/character/axeenemy.png">
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