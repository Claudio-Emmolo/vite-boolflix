<script>
export default {
    name: 'FlagLang',
    props: ['langCode'],
    data() {
        return {

        }
    },

    methods: {
        getImagePath: function (codeLang) {
            return new URL(`../assets/lang-code/${codeLang}.png`, import.meta.url).href;
        }
    }

}
</script>

<template>
    <img :src="getImagePath(langCode)" :alt="langCode + ' flag'" onerror="this.style.display='none'">
</template>

<style lang="scss">
img {
    width: 40px;
}
</style>