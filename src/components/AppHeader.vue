<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            userSearch: ''
        }
    },
}
</script>

<template>
    <header>
        <input type="text" placeholder="Cerca Film" v-model="userSearch">
        <button @click="$emit('sendResearch', userSearch)">Cerca</button>
    </header>
</template>

<style lang="scss">

</style>