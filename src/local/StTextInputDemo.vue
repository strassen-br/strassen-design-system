<template>
  <div class="row">
    <div
      v-for="size in ['sm', 'md', 'lg']"
      :key="size"
      :class="{
        'w-32': size === 'sm',
        'w-36': size === 'md',
        'w-44': size === 'lg',
      }"
    >
      <st-text-input
        :identifier="`my-input-id-${size}`"
        top-label="My input"
        bottom-label="Helper text here"
        placeholder="My placeholder"
        :size="size"
      />
    </div>
  </div>
  <div class="row">
    <div
      v-for="size in ['sm', 'md', 'lg']"
      :key="size"
      :class="{
        'w-32': size === 'sm',
        'w-36': size === 'md',
        'w-44': size === 'lg',
      }"
    >
      <st-text-input
        :identifier="`my-input-id-${size}-success`"
        top-label="My input"
        bottom-label="Success text here"
        placeholder="My placeholder"
        validation-state="success"
        :size="size"
      />
    </div>
  </div>
  <div class="row">
    <div
      v-for="size in ['sm', 'md', 'lg']"
      :key="size"
      :class="{
        'w-32': size === 'sm',
        'w-36': size === 'md',
        'w-44': size === 'lg',
      }"
    >
      <st-text-input
        :identifier="`my-input-id-${size}-error`"
        top-label="My input"
        bottom-label="An error here"
        placeholder="My placeholder"
        validation-state="error"
        :size="size"
      />
    </div>
  </div>
  <div class="row">
    <div
      v-for="size in ['sm', 'md', 'lg']"
      :key="size"
      :class="{
        'w-32': size === 'sm',
        'w-36': size === 'md',
        'w-44': size === 'lg',
      }"
    >
      <st-text-input
        :identifier="`my-input-id-${size}-error`"
        top-label="My input"
        bottom-label="An error here"
        placeholder="My placeholder"
        validation-state="error"
        :disabled="true"
        :size="size"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StTextInput from '../components/atoms/StTextInput.vue'

export default defineComponent({
  components: { StTextInput },
})
</script>
