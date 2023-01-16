<script>
export default {
    name: 'FlagLang',
    props: ['langCode']
}
</script>

<template>
    <img :src="`https://crowdin.com/images/flags/${langCode}.png`" :alt="langCode + ' flag'"
        onerror="this.style.display='none'">
</template>

<style lang="scss">

</style>