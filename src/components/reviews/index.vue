<template>
   <section class="reviews">
    <div class="reviews__heading">
<h2 class="reviews__title">Summury rating</h2>
<div class="reviews__rating">
    <span>{{amountOfReviews}} reviews </span> 
    <StarRating :rating="totalRating"/>
</div>
    </div>
     <ReviewsItem v-for="review in currentReviews" :key="review.author" :review="review"/>
    <button @click="toggleReviews" class="reviews__show-more">{{buttonText}}</button>
   </section>
</template>

<script>
import ReviewsItem from './reviews-item'
import StarRating from '../../components/StarRating.vue'
    export default {
        name: "ReviewsApp",
        components: {
            ReviewsItem,
            StarRating,
        },
        props: {
           reviews: {
            type: Array,
            required: true
           }
        },
        data() {
            return {
                reviewsLimit: 2
            }
        },
        computed: {
            totalRating() {
                const total = this.reviews.reduce((acc, review) => acc + review.rating, 0)
                return total/ this.reviews.length
            },
            amountOfReviews() {
                return this.reviews.length
            },
            currentReviews() {
                return this.reviews.slice(0, this.reviewsLimit)
            },
            buttonText() {
                return this.reviewsLimit === this.reviews.length
                ? "Close reviews"
                : " Read more..."  
            }
        },
        methods: {
            toggleReviews() {
                if (this.reviewsLimit === this.reviews.length) {
                   (this.reviewsLimit = 2) 
                   return
                }
        
                 this.reviewsLimit = this.reviews.length
            }
        }
    }
</script>

<style lang="scss" scoped>
.reviews {
    margin-top: 20px;
    margin-left: 30px;
    background: #b2cbed;
    padding: 0 2px;
    &__show-more {
        background: none;
        border: none;
        cursor: pointer;
        width: 100%;
        padding: 12px;
        font-family: inherit;
    }
    &__heading {
        padding: 15px;
    }
    &__title {
        font-weight: 700;
        text-transform: capitalize;
        margin-bottom: 10px;
    }
    &__rating {
     display: flex;
     justify-content: space-between;
    }
}

</style>