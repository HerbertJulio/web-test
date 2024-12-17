<script setup>
import PrimeButton from "primevue/button";
import PrimeTag from "primevue/tag";
import Calendar from "primevue/calendar";
import { defineProps, ref, defineCustomElement } from "vue";
import "azion-theme/widget";

defineCustomElement({
  components: {
    PrimeButton,
    PrimeTag,
    Calendar,
  },
});

customElements.define("prime-button", PrimeButton);
customElements.define("prime-tag", PrimeTag);
customElements.define("calendar", Calendar);

const props = defineProps({
  message: String,
});

const buttondisplay = ref();
const icondisplay = ref();
const templatedisplay = ref();
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
  <div
    class="flex justify-center items-center h-screen flex-col gap-6 azion azion-light"
  >
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
      <h1 class="text-center font-bold mb-4">{{ props.message }}</h1>
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
    <div class="card flex flex-wrap gap-3 p-fluid">
      <div class="flex-auto">
        <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
        <Calendar
          v-model="buttondisplay"
          showIcon
          :showOnFocus="false"
          inputId="buttondisplay"
        />
      </div>
      <div class="flex-auto">
        <label for="icondisplay" class="font-bold block mb-2">
          Default Icon
        </label>
        <Calendar
          v-model="icondisplay"
          showIcon
          iconDisplay="input"
          inputId="icondisplay"
        />
      </div>
      <div class="flex-auto">
        <label for="templatedisplay" class="font-bold block mb-2">
          Custom Icon
        </label>
        <Calendar
          v-model="templatedisplay"
          showIcon
          iconDisplay="input"
          timeOnly
          inputId="templatedisplay"
        >
          <template #inputicon="{ clickCallback }">
            <InputIcon
              class="pi pi-clock cursor-pointer"
              @click="clickCallback"
            />
          </template>
        </Calendar>
      </div>
    </div>
  </div>
</template>
<style>
@import "primeicons/primeicons.css";
@import "primeflex/primeflex.css";
@import "./assets/main.css";
</style>
