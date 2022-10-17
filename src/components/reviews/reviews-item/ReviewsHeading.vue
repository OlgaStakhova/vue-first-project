<template>
    <div class="reviews-heading">
        <ReviewsAvatar class="reviews-heading__avtar"/>
        <div class="reviews-heading__content">
            <span class="reviews-heading__autor">{{author}}</span>
            <StarRating :rating="rating" />
        </div>

    </div>
</template>

<script>
import StarRating from '../../StarRating.vue'
import ReviewsAvatar from './ReviewsAvatar.vue'
    export default {
        name: "ReviewsHeading",
        components: {
            StarRating,
            ReviewsAvatar,
        },
        props: {
            author: {
                type: String,
                required: true,
            },
            rating: {
                type:Number,
                default:0,
            }
        }

    }
</script>

<style lang="scss" scoped>
.reviews-heading {
    padding: 5px 20px 20px;
    background: rgb(240, 242, 243);
    display: flex;
    &__content {
        display: flex;
        flex-direction: column;
    }
    &__avtar {
        display:inline-block;
        margin-right: 15px;
    }
}
</style>