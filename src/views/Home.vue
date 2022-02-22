<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is a jank test of js libraries</h1>
    <input
      v-model="ccNumber"
      class="input-element"
      v-cleave="{ creditCard: true, onCreditCardTypeChanged: cardChanged }"
    />
    <input name="text" v-model="ccMonth" v-cleave="{ date: true, datePattern: ['m'] }" />
    <input
      type="number"
      v-model="ccv"
      v-cleave="{ numeral: true, numeralPositiveOnly: true, numeralIntegerScale: 3 }"
    />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Cleave from "cleave.js";
//import chartXkcd from "chart.xkcd";

export default {
  data: function () {
    return {};
  },
  directives: {
    cleave: {
      inserted: (el, binding) => {
        el.cleave = new Cleave(el, binding.value || {});
      },
      update: (el) => {
        const event = new Event("input", { bubbles: true });
        setTimeout(function () {
          el.value = el.cleave.properties.result;
          el.dispatchEvent(event);
        }, 100);
      },
    },
  },
  // name: "Home",
  // components: {
  //   HelloWorld,
  // },
};
</script>
