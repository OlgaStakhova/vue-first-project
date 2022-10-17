<template>
    <main class="homepage">
        <ContainerApp>
          <ApartmentFilterForm class="apartments-filter" @submit="filter" />
        </ContainerApp>
        <ContainerApp>
        <p v-if="!filteredApartment.length">Not found items</p>
        <ApartmentsList v-else :items='filteredApartment' />
      </ContainerApp>
    </main>
  </template>
  
  <script>
  import ApartmentsList from '../components/apartment/ApartmentsList.vue'
  import ApartmentFilterForm from '../components/apartment/ApartmentFilterForm.vue'
  import ContainerApp from '../components/shared/ContainerApp.vue'
  import {getApartmentsList} from '../services/apartmets.service.js'


  export default {
    name: 'HomePage',
    components: {
      ApartmentsList,
      ApartmentFilterForm,
      ContainerApp,
    },
    data() {
      return {
        text: '',
        apartments: [],
        filters: {
          city: '',
          price: 0,
        },
      }
    },
    computed: {
      filteredApartment() {
        return this.filterByCityName(this.filterByPrice(this.apartments))
      }
    },
    async created() {
     try {
      const {data} = await getApartmentsList()
      console.log(data)
      this.apartments = data
    } catch (error) {
      console.error(error);
    }
    },
  
    methods: {
      filter({ city, price }) {
        this.filters.city = city
        this.filters.price = price
      },
      filterByCityName(apartments) {
        if (!this.filters.city) return apartments
  
        return apartments.filter(apartment => {
          return apartment.location.city === this.filters.city
        })
      },
      filterByPrice(apartments) {
        if (!this.filters.price) return apartments
  
        return apartments.filter(apartment => {
          return apartment.price >= this.filters.price
        })
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
   .apartments-filter {
    margin-bottom: 40px;
  }
  </style>
  