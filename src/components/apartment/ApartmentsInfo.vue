<template>
    <article class="apartment-main-info">
        <div class="apartment-main-info__heading">
            <h1 class="apartment-main-info__title">
            {{ apartment.title}}
            </h1>
            <StarRating :rating="apartment.rating" />
        </div>
        
        <img 
          :src="apartment.imgUrl"
          alt="" 
          class="aprtment-main-info__photo"
        >
        <p class="apartment-main-info__desccription">{{ apartment.descr}}</p>
    </article>
</template>

<script>
import StarRating from '../StarRating.vue'

    export default {
        name: "ApartmentsInfo",
        components: {
            StarRating,
        },
        props: {
            apartment: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
 .apartment-main-info {
    &__heading {
      display: flex;
      align-items: baseline;

    }

    &__title {
        font-size: 20px;
        font-weight: 700;
        text-transform: capitalize;
        margin-bottom: 20px;
        margin-right: 20px;
    }
    &__photo {
        height: 250px;
        min-width: 100%;
    }
    &__description {
        line-height: 1.3;
        margin-top: 30px;
    }
}
</style>