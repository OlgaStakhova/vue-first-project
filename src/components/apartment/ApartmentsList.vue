<template>
    <ContainerApp>
        <div class="apartments-list">
            <ApartmentItem
            v-for="{ id, descr, rating, imgUrl, price } in items"
            :key="id"
            :id="id"
            :descr="descr"
            :rating="rating"
            :imgSrc="imgUrl"
            :price="price"
            class="apartments-list__item"
            />
        </div>
     </ContainerApp>
</template>

<script>
  import ApartmentItem from './ApartmentItem.vue'
  import ContainerApp from  '../shared/ContainerApp.vue'

    export default {
        name: "ApartmentsList",
        components: {
            ApartmentItem,
            ContainerApp,
        },
        props: {
            items:{
                type: Array,
                default: () => [],
            }
        },
    }
</script>

<style lang="scss" scoped>
.apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

    &__item {
        margin-bottom: 30px;
    }
}
</style>