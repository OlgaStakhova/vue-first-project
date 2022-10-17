<template>
    <form class="form" @submit.prevent="handelSubmit">
<CustomSelect 
  :items="cities" 
  v-model="city"
  class="form__select"
/>
<CustomInput 
  v-model="price" 
  type="number"
  placeholder="Price from"
  error-message="Cannot be empty"
  :rules="rules"
/>
<SubmitButton 
  class="form__submit"
  type="submit"
>
   Selest apartments
</SubmitButton>
    
    </form>
</template>

<script>
import CustomInput from '../shared/CustomInput.vue'
import CustomSelect from '../shared/CustomSelect.vue'
import SubmitButton from '../shared/ButtonApp.vue'
import {isRequired, charLimit} from '../../utils/validationRules.js'

export default {
        name: 'ApartmentFilterForm',
        components: {
            CustomInput,
            CustomSelect,
            SubmitButton,
        },
        data() {
          return {
            price:'',
            city: ''
          }
        },
        computed: {
          rules() {
            return [isRequired, charLimit(10)]
          },
            cities() {
                return [{value: '', lable: 'city', selected: true}, "Kyiv", "Odesa", "Poltava", "Dnipro", "Lviv", "Mariupol"]
            }
        },
        methods: {
            handelSubmit () {
              this.$emit('submit', {
                city: this.city,
                price: this.price,
            })  
            }
        }
        
    }
</script>

<style lang="scss" scoped>
  .form {
    display: flex;

    &__select {
        margin-right: 30px;
        height: 100%;
    }

    &__submit {
        margin-left: auto;
    }
  }
</style>