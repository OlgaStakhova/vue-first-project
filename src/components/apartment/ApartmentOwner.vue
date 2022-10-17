<template>
    <section class="apartment-owner">
        <h2 class="apartment-owner__title">Info about owner:</h2>
        <p class="apartment-owner__info">{{owner.name}}</p>
        <p class="apartment-owner__info">tel: {{owner.phone}}</p>
        <p class="apartment-owner__info">email: {{owner.email}}</p>
    </section>
</template>

<script>
    export default {
        name: "ApartmentOwner",
        props: {
          owner:  {
            type: Object,
            required: true,
        }
        },
    }
</script>

<style lang="scss" scoped>
  .apartment-owner {
    padding: 20px;
    background: rgb(178, 203, 237);
    font-weight: 400;
  }
</style>