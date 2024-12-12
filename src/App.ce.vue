<script setup>
import PrimeButton from "primevue/button";
import PrimeTag from "primevue/tag";
import { defineProps, ref } from "vue";

const props = defineProps({
  message: String,
});

const successMessage = ref("");
const errorMessage = ref("");

const handleSuccess = () => {
  successMessage.value = "Operation successful!";
  errorMessage.value = "";
};

const handleCancel = () => {
  errorMessage.value = "Operation cancelled!";
  successMessage.value = "";
};
</script>
<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="p-4 shadow-lg rounded-lg bg-white"
      style="
        width: 300px;
        height: 200px;
        border-radius: 15px;
        background-color: #f3f4f6;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      "
    >
      <div class="flex justify-between items-center mb-4">
        <PrimeButton
          label="Success"
          icon="pi pi-check"
          class="p-button-success"
          @click="handleSuccess"
        />
        <PrimeButton
          label="Cancel"
          icon="pi pi-times"
          class="p-button-danger"
          @click="handleCancel"
        />
      </div>
      <PrimeTag
        v-if="successMessage"
        :value="successMessage"
        class="p-tag-success"
      />
      <PrimeTag
        v-if="errorMessage"
        :value="errorMessage"
        class="p-tag-danger"
      />
      <div class="text-center mt-4">
        <p class="text-sm text-gray-600">Credit Card</p>
        <p class="font-bold text-xl">**** **** **** 1234</p>
      </div>
    </div>
  </div>
</template>
