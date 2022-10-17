<template>
    <section class="reviews-item">
      <ReviewsHeading 
        :rating="review.rating"
        :author="review.author"
      />
      <p class="reviews-item__content">{{review.content}}</p>
    </section>
</template>

<script>
import ReviewsHeading from './ReviewsHeading.vue'
    export default {
        name: "ReviewsItem",
        components: {
            ReviewsHeading,
        },
        props: {
            review: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
 .reviews-item {
    &__content {
        padding: 5px 20px 20px;
        background: rgb(240, 242, 243);
        margin-bottom: 2px;
    }
 }
</style>