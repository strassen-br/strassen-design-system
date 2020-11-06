<template lang="pug">
  .st-button-wrapper Teste
</template>

<script lang="ts">
import Vue from 'vue';
import { PropsTypes, props } from './StButton';

type Data = {}
type Methods = {}
type Computed = {}
export type Events = {}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props,
});
</script>

<style lang="postcss" scoped>
.st-button-wrapper {
  @apply flex px-4 py-5
}
</style>
