<template>
  <div class="fraction-summator__footer">
    <div class="fraction-summator__footer-item">
      <div class="fraction-summator__info">
        {{ error }}
      </div>
    </div>

    <div class="fraction-summator__footer-item">
      <div
        class="fraction-summator__add-item-button"
        @click="add"
      >
        +
      </div>

      <div class="fraction-summator__add-item-text">
        Add new fraction
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FractionSummatorFooter',

  props: {
    error: {
      type: String,
      default: '',
    },
  },

  methods: {
    add() {
      this.$emit('add');
    },
  },
};
</script>

<style lang="scss">
.fraction-summator__footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  .fraction-summator__footer-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
  }

  .fraction-summator__add-item-button {
    cursor: pointer;
    position: relative;
    padding: 0;
    margin: 0;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    line-height: 40px;
    color: white;
    font-size: 25pt;
    background-color: #3F51B5;
    transition: 0.2s;
    text-align: center;

    &:hover {
      background-color: #606fc7;
      box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: scale(0.90);
      box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .fraction-summator__add-item-text {
    margin-left: 10px;
  }
}
</style>
