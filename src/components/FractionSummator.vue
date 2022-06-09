<template>
  <div class="fraction-summator">
    <div class="fraction-summator__fractions-container">
      <div
        v-for="(fraction, index) in fractions"
        :key="index"
        class="fraction-summator__block d-flex-center"
      >
        <Fraction
          :fraction="fraction"
          :can-delete="canDelete"
          @remove="removeFraction(index)"
        />

        <div
          v-if="showMiddleSign(index)"
          class="fraction__middle-sign pt20"
        >
          +
        </div>
      </div>

      <span class="fraction-summator__block fs-xl pt20">=</span>
      <span class="fraction-summator__block fs-xl pt20">{{ fractionsSum }}</span>
    </div>

    <FractionSummatorFooter
      :error="error"
      @add="addFraction"
    />
  </div>
</template>

<script>
import Fraction from './Fraction.vue';
import FractionSummatorFooter from './FractionSummatorFooter.vue';

export default {
  name: 'FractionSummator',

  components: {
    Fraction,
    FractionSummatorFooter,
  },

  data() {
    return {
      fractionsMaxCount: 5,
      fractionsInitialCount: 1,
      fractions: [],
      error: null,
    };
  },

  computed: {
    fractionsSum() {
      return this.validateFractions(this.fractions)
        ? this.getValidatedFractionsSum()
        : 0;
    },

    canDelete() {
      return this.fractions.length > 1;
    },
  },

  methods: {
    initFractions() {
      for (let i = 0; i < this.fractionsInitialCount; i++) {
        this.addFraction();
      }
    },

    round(value) {
      return value.toFixed(2);
    },

    getValidatedFractionsSum() {
      const fractionsSum = this.fractions.reduce((sum, fraction) => {
        const res = Number(fraction.numerator) && Number(fraction.denominator)
          ? Number(fraction.numerator) / Number(fraction.denominator)
          : 0;

        return sum + res;
      }, 0);

      return this.round(fractionsSum);
    },

    setError(error) {
      this.error = error;
    },

    addFraction() {
      if (this.fractions.length < this.fractionsMaxCount) {
        this.fractions.push({
          numerator: '',
          denominator: '',
        });
      }
    },

    removeFraction(index) {
      this.canDelete && this.fractions.splice(index, 1);
    },

    showMiddleSign(index) {
      return this.fractions.length > 1 && index !== this.fractions.length - 1;
    },

    validateFractions() {
      const validDivisionByZero = !this.fractions.find((fraction) => {
        return (Number(fraction.numerator) && !Number(fraction.denominator));
      });

      !validDivisionByZero
        ? this.setError('Division by zero')
        : this.setError('');

      return validDivisionByZero;
    },
  },

  created() {
    this.initFractions();
  },
};
</script>

<style lang="scss">
.fraction-summator {
  position: relative;
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &__fractions-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .fraction__middle-sign {
      padding-left: 5px;
      font-size: 16px;
    }

    .fraction-summator__block:not(:last-child) {
      padding-right: 5px;
    }
  }
}
</style>
