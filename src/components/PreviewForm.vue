<template>
  <!-- Form preview start -->
  <div v-if="isPreview" class="previewFormContainer">
    <div class="previewHeader">
      <i @click="closePreview" class="pi pi-arrow-left" />
      <h1>Form Preview</h1>
    </div>
    <div class="previewContainer">
      <div v-for="tableData in tablesData" :key="tableData" class="formInput">
        <div
          v-if="tableData.type.name == 'Textbox' && tableData.view"
          class="fieldContainer"
        >
          <label class="label">{{ tableData.label }}</label>
          <InputText
            :disabled="!tableData.edit"
            :value="tableData.value"
            :name="tableData.name"
            class="p-inputPreview"
          />
        </div>
        <div
          v-if="tableData.type.name == 'Checkbox' && tableData.view"
          class="fieldContainer"
        >
          <label class="label">{{ tableData.label }}</label>
          <Checkbox
            v-model="checked"
            :binary="true"
            :disabled="!tableData.edit"
            :name="tableData.name"
            class="p-inputPreview"
          />
        </div>
        <div
          v-if="tableData.type.name == 'Radio Group' && tableData.view"
          class="fieldContainer"
        >
          <label class="label">{{ tableData.label }}</label>
          <RadioButton
            :value="!tableData.value"
            :name="tableData.name"
            class="p-inputPreview"
            :disabled="!tableData.edit"
          />
        </div>
        <div
          v-if="tableData.type.name == 'Textarea' && tableData.view"
          class="fieldContainer"
        >
          <label class="label">{{ tableData.label }}</label>
          <Textarea
            :disabled="!tableData.edit"
            rows="5"
            cols="30"
            :value="tableData.value"
            :name="tableData.name"
            class="p-inputPreview"
          />
        </div>
        <div
          v-if="tableData.type.name == 'Select' && tableData.view"
          class="fieldContainer"
        >
          <label class="label">{{ tableData.label }}</label>
          <Dropdown
            :name="tableData.name"
            :disabled="!tableData.edit"
            :options="previewOptions"
            placeholder="Select Types"
          />
        </div>

        <div
          v-if="tableData.type.name == 'Calender' && tableData.view"
          class="fieldContainer"
        >
          <label class="label">{{ tableData.label }}</label>
          <Calendar
            :disabled="!tableData.edit"
            v-model="tableData.value"
            :name="tableData.name"
          />
        </div>

        <div
          v-if="tableData.type.name == 'Button' && tableData.view"
          class="fieldContainer"
        >
          <label class="label">{{ tableData.label }}</label>
          <Button :name="tableData.name" :disabled="!tableData.edit">{{
            tableData.value
          }}</Button>
        </div>
      </div>
    </div>
  </div>
  <!-- Form preview end -->
</template>

<script>
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import Calendar from "primevue/calendar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";

export default {
  name: "preview-form",
  components: {
    Checkbox,
    RadioButton,
    Calendar,
    InputText,
    Button,
    Textarea,
    Dropdown,
  },
  props: {
    isPreview: Boolean,
    tablesData: Array,
  },
  methods: {
    closePreview() {
      this.$emit("preview", false);
    },
  },
};
</script>

<style scoped>
.previewFormContainer {
  display: flex;
  padding: 10px;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
}

.p-preview-button {
  margin-top: 10px;
  width: fit-content;
}

.p-inputOptions {
  width: 155px;
}

.previewContainer {
  border: 2px solid lightgray;
  border-radius: 4px;
  padding-block: 20px;
  padding-inline: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.formInput {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
}

.formInput:last-child {
  margin: 0;
}

.p-inputPreview {
  margin-top: 10px;
}

.label {
  font-weight: 700;
  font-size: 24px;
}

.fieldContainer {
  display: flex;
  flex-direction: column;
}

.fieldContainer > button {
  width: max-content;
  margin-top: 10px;
}

.p-cancel {
  background-color: red;
}

.previewFormContainer {
  display: flex;
  padding: 10px;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
}

.p-preview-button {
  margin-top: 10px;
  width: fit-content;
}

.p-inputOptions {
  width: 155px;
}

.previewContainer {
  border: 2px solid lightgray;  
  border-radius: 4px;
  padding-block: 20px;
  padding-inline: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.formInput {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
}

.formInput:last-child {
  margin: 0;
}

.p-inputPreview {
  margin-top: 10px;
}

.label {
  font-weight: 700;
  font-size: 24px;
}

.previewHeader {
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
}

.previewHeader > i {
  position: absolute;
  top: 15px;
  cursor: pointer;
  left: 10%;
}
</style>