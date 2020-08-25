<template>
  <div>
    Sidebar
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      prices: [
        'Any',
        'Under $25',
        '$25 to $100',
        '$100 to $500',
        'Over $500'
      ],
      priceFilter: 0,
      checkbox: true
    }
  }
}
</script>
