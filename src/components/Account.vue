<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Orders</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p>
    <table v-if="ordersByUser" class="table">
      <thead>
        <th>Product Name</th>
        <th>Category</th>
        <th>Price</th>
      </thead>
      <tbody>
        <tr v-for="thisProduct in ordersByUser" :key="thisProduct.ProductID">
          <th>
            <router-link :to="`/products/${thisProduct.ProductID}`">{{
              thisProduct.productName
            }}</router-link>
          </th>
          <th>{{ thisProduct.CategoryName }}</th>
          <th>{{ thisProduct.productPrice }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ordersByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.NameFirst;
    },
  },
  created() {
    axios
      .get("/products", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.ordersByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError;
      });
  },
};
</script>

<style></style>