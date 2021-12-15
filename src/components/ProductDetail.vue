<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ product.productName }}</h2>
        <br />
        <p>
          Category: <br /><strong>{{ product.CategoryName }}</strong>
        </p>
        <p>
          Price: <br /><strong>{{ formattedPrice }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link
      v-if="auth"
      :to="`/products/${this.$route.params.ProductID}/review`"
      ><button class="btn btn-success">Add a Review</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Add a Review
      </button></router-link
    >

    <br /><br />
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      let allProducts = this.$store.state.products;

      let thisProduct = allProducts.find((aProduct) => {
        return aProduct.ProductID == this.$route.params.ProductID;
      });

      return thisProduct;
    },
    formattedPrice() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.product.productPrice);
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style>
</style>