<template>
    <button v-on="$listeners" v-bind:type="type" :class="{btn: true, 'btn--outlinet': outlinet }">
      <slot></slot>
    </button>
</template>

<script>
    export default {
      name: 'ButtonApp',   
      props: {
        type: {
          type: String,
          default: 'button',
        },
        outlinet: {
            type: Boolean,
            default: false,
        }
      }
    }
</script>

<style lang="scss" scoped>
.btn {
 display: inline-block;
 font-size: 18px;
 background: rgb(190, 80, 40);
 color: #fff;
 cursor: pointer;
 min-width: 220px;
 border: 1px solid transparent;
 padding: 8px 15px;

 &--outlinet {
  background:none;
  border: 1px solid rgb(190, 80, 40);
  color: rgb(190, 80, 40)
 }
}
</style>