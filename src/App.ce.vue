<script setup>
import PrimeButton from "primevue/button";
import PrimeTag from "primevue/tag";

const props = defineProps({
  message: String,
});

</script>
<template>
  <div class="bg-surface-50 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
          <div class="flex justify-between mb-4">
            <div>
              <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">
                {{ props.message }}
              </span>
              <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">
                1521
              </div>
              <PrimeButton label="View Details" icon="pi pi-angle-right" severity="primary" />
              <PrimeTag value="New" severity="success" />
            </div>
            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/30 rounded-border w-10 h-10">
              <i class="pi pi-shopping-cart text-blue-500 dark:text-blue-200 !text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">24 new </span>
          <span class="text-surface-500 dark:text-surface-300">since last visit</span>
        </div>
      </div>
    </div>
  </div>
</template>