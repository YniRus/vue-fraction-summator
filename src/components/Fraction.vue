<template>
  <div class="fraction">
    <div
      class="fraction__delete"
      :class="{ 'fraction__delete_muted' : !canDelete }"
      @click="remove"
    >
      &times;
    </div>

    <input
      type="number"
      class="fraction__numerator"
      v-model="fraction.numerator"
      v-on:input="validateInput(fraction,'numerator')"
    >

    <span class="fraction__separator" />

    <input
      type="number"
      class="fraction__denominator"
      v-model="fraction.denominator"
      v-on:input="validateInput(fraction,'denominator')"
    >
  </div>
</template>

<script>
export default {
  name: 'Fraction',

  props: {
    fraction: {
      type: Object,
      required: true,
    },

    canDelete: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      min: 1,
      max: 99,
    };
  },

  methods: {
    remove() {
      this.$emit('remove');
    },

    validateInput(fraction, field) {
      return Math.min(Math.max(fraction[field], this.min), this.max);
    },
  },
};
</script>

<style lang="scss">
.fraction {
  display: flex;
  flex-direction: column;
  align-items: center;

  .fraction__numerator,
  .fraction__denominator {
    width: 100px;
    padding: 5px;
    height: 12px;
    line-height: 12px;
  }

  .fraction__delete {
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: red;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;

    &_muted {
      cursor : not-allowed;
      color : gray;
    }
  }

  .fraction__separator {
    width: 100%;
    height: 1px;
    margin: 5px;
    background-color: black;
  }
}
</style>
