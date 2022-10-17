<template>
    <div class="container">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ContainerApp'
    }
</script>

<style lang="scss" scoped>
.container {
    max-width: 90%;
    margin: 0 auto;
}
</style>
