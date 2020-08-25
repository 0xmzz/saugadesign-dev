<template>
  <div>Cart</div>
</template>

<script>
const ProductList = require('../components/cart/ProductList')
const CheckoutBox = require('../components/cart/CheckoutBox')

module.exports = {
  components: {
    ProductList,
    CheckoutBox
  }
}
</script>
