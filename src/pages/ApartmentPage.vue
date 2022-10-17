<template>
    <main class="apartment-page">
        <ContainerApp>
            <div v-if="apartment" class="apartment-page__content">
                 <ApartmentsInfo :apartment="apartment" />
                <div class="apartment-page__additional-info">
                    <ApartmentOwner class="apartment-page__owner" :owner="apartment.owner" />
                    <ReviewsApp :reviews="reviewsList" />
                </div>
            </div>
        </ContainerApp>
    </main>
</template>

<script>
import ContainerApp from '../components/shared/ContainerApp.vue'
import ApartmentsInfo from '../components/apartment/ApartmentsInfo.vue'
import ApartmentOwner from '../components/apartment/ApartmentOwner.vue'
import ReviewsApp from '../components/reviews'
import reviewsList from '../components/reviews/reviews-item/reviews.json'
import { getApartmentById } from '../services/apartmets.service.js'

export default {
        name: 'ApartmentPage',
        components: {
            ContainerApp,
            ApartmentsInfo,
            ApartmentOwner,
            ReviewsApp,
        },
        data() {
            return {
                apartment: null,
            }
        },
        computed: {
            reviewsList() {
              return reviewsList
            },
        },
        async created() {
            try {
                const { id } = this.$route.params
                const {data} = await getApartmentById(id)
                this.apartment = data
            } catch (error) {
                console.error(error)
            }
            console.log(this.apartment)
        }
    }
</script>

<style lang="scss" scoped>
 .apartment-page {
    padding-bottom: 55px;
    &__content {
        display: flex;
        align-items: flex-start;
    }
    &__owner {
        min-width: 350px;
        margin-left: 30px;
    }
 }

</style>