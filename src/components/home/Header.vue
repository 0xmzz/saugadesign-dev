

<script>

module.exports = {
  
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "300px";
        case "md":
          return "300px";
        case "lg":
          return "300px";
        case "xl":
          return "350px";
      }
      return "300px";
    },
    data: () => ({}),
  },
};
</script>
