<template>
    <header class="header">
        <ContainerApp>
            <router-link to="/">
                <LogoApp />
            </router-link>
        </ContainerApp>
    </header>
</template>

<script>
import ContainerApp from './shared/ContainerApp.vue'
import LogoApp from './LogoApp.vue'

export default {
    name: "HeaderApp",
    components: {
        ContainerApp,
        LogoApp,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 0;
    background-color: $secondary-color ;
}
</style>