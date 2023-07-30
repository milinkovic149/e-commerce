<script setup>
defineProps({
  modelValue: { type: [Number, String], default: 0 },
});
const emit = defineEmits(["update:modelValue", "input"]);
var disabled = true;

const updateValue = (value) => {
  if (value !== "") {
    emit("update:modelValue", value);
  }

  disabled = value === 0;
};
</script>
<template>
  <span>
    <button
        class="cursor-pointer bg-gray-200 px-2 rounded-l"
        :class="{ disabled: modelValue===0 || modelValue===1}"
        @click="updateValue(modelValue > 0 ? modelValue - 1 : null)"
    >
      -
    </button>
    <input
        :value="modelValue"
        type="number"
        @input="updateValue($event.target.value)"
        disabled="disabled"
    />
    <button
        class="bg-gray-200 px-2 rounded-r cursor-pointer"
        @click="updateValue(modelValue + 1)"
    >
      +
    </button>
  </span>
</template>

<style scoped lang="scss">

span {
  display: flex;
  gap: 12px;

  input {
    width: 50px;
    border-radius: 10px;
    font-size: 20px;
    justify-content: center;
    text-align:center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type=number] {
      -moz-appearance: textfield;
    }
  }
  button {
    height: 50px;
    width: 50px;
    border: 0;
    cursor: pointer;
    background: var(--light-green);
    color: white;
    border-radius: 10px;
    font-size: 20px;
  }

  .disabled {
    opacity: 0.5;
    cursor:default;
    pointer-events: none;
  }
}
</style>