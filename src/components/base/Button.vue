<template>
  <button :class="`px-4 py-4 rounded-xl ${_class}`">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    _class: {
      type: String,
    },
    btnText: {
      type: String,
    }
  }
}
</script>
