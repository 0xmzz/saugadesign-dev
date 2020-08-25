<template>
  <div>Checkout Box</div>
</template>

<script>
module.exports = {
  data() {
    return {
      checkoutForm: null,
      nameRules: [],
      name: '',
      emailRules: [],
      email: ''
    }
  },
  methods: {
    goToCheckout() {
      this.$router.push({ name: 'checkout' })
    }
  }
}
</script>
