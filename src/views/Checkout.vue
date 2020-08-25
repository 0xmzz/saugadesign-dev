<template>
  <div>Checkout</div>
</template>

<script>
const ContactInfo = require('../components/checkout/ContactInfo')
const ShippingInfo = require('../components/checkout/ShippingInfo')
const Review = require('../components/checkout/Review')

module.exports = {
  components: {
    ContactInfo,
    ShippingInfo,
    Review
  },
  data() {
    return {
      step: 1,
      checkoutForm: false,
      data: {
        email: '',
        name: '',
        phone: '',
        street: '',
        state: '',
        zip: ''
      },
      rules: {
        required: value => !!value || 'Required.',
        zip: value => value.length == 5 || 'Must be five characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        phone: value => {
          const pattern = /\d{10}/
          return pattern.test(value) || 'Invalid phone number.'
        }
      }
    }
  },
  methods: {
    next() {
      this.step += 1
    },
    previous() {
      this.step -= 1
    },
    submitOrder() {
      this.$router.push({ name: 'thankyou' })
    }
  }
}
</script>
