<template>
  <div class="formContainer">
    <div class="subContainer">
      <!-- css url's start -->
      <div v-if="!isPreview" class="container">
        <!-- button action start -->
        <div class="btn">
          <Button @click="handleAddCssURL" class="p-button-icon">
            <i class="pi pi-plus"></i>
          </Button>
        </div>
        <!-- button action end -->
        <label class="url">Add Css URL's</label>
        <div v-for="(css, index) in allCss" :key="css" class="inputContainer">
          <div class="cssContainer">
            <InputText
              placeholder="Enter css URL"
              class="p-input"
              type="text"
              :key="index"
              v-model="css.css"
            />
            <Button @click="handleDeleteCss(index)" class="p-cancel">
              <i class="pi pi-minus"></i>
            </Button>
          </div>
        </div>

        <div class="noData" v-if="allCss.length == 0">No Css URL's</div>
      </div>
      <!-- css url's end -->

      <!-- js url's start -->
      <div v-if="!isPreview" class="container">
        <!-- button action start -->
        <div class="btn">
          <Button @click="handleAddJsURL" class="p-button-icon">
            <i class="pi pi-plus"></i>
          </Button>
        </div>
        <!-- button action end -->
        <label class="url">Add Js URL's</label>
        <div v-for="(js, index) in allJs" :key="js" class="inputContainer">
          <div class="cssContainer">
            <InputText
              v-model="js.js"
              placeholder="Enter js URL"
              class="p-input"
              :key="index"
              type="text"
            />
            <Button @click="handleDeleteJsURL(index)" class="p-cancel">
              <i class="pi pi-minus"></i>
            </Button>
          </div>
        </div>
        <div class="noData" v-if="allJs.length == 0">No Js URL's</div>
      </div>
      <!-- js url's end -->

      <!-- end script start -->
      <div v-if="!isPreview" class="container">
        <label class="url">End Script</label>
        <div class="inputContainer">
          <Textarea v-model="textAreaEndScript" rows="5" cols="30" />
        </div>
      </div>
      <!-- end script start -->

      <!-- Table start -->
      <div v-if="!isPreview" class="tableContainer">
        <!-- table head start -->
        <div class="tableHead">
          <span v-for="tableData in tableHeadData" :key="tableData">{{
            tableData
          }}</span>
        </div>
        <!-- table head end -->

        <!-- table body start -->
        <div class="tableBody">
          <div
            v-for="(tableData, index) in tablesData"
            :key="tableData"
            class="tableRow"
          >
            <div class="inputContainer">
              <InputText
                :key="index"
                v-model="tableData.name"
                class="p-input"
                type="text"
              />
            </div>

            <div class="inputContainer">
              <Dropdown
                v-model="tableData.type"
                optionLabel="name"
                :options="types"
                placeholder="Select Types"
              />
            </div>

            <div class="inputContainer">
              <InputText
                v-model="tableData.label"
                class="p-input"
                type="text"
              />
            </div>

            <div class="inputContainer">
              <InputText
                v-model="tableData.value"
                class="p-input"
                type="text"
              />
            </div>

            <div class="inputContainer">
              <input
                v-model="tableData.view"
                class="inputCheckbox"
                type="checkbox"
              />
            </div>

            <div class="inputContainer">
              <input
                v-model="tableData.edit"
                class="inputCheckbox"
                type="checkbox"
              />
            </div>

            <div class="inputContainer">
              <inputText
                v-model="tableData.event"
                class="p-input"
                type="text"
              />
            </div>

            <div class="inputContainer">
              <Dropdown
                v-model="tableData.gm"
                optionLabel="name"
                :options="GM"
                placeholder="Select GM"
              />
            </div>

            <Button @click="handleDeleteTableRow(index)" class="p-table-cancel">
              <i class="pi pi-minus"></i>
            </Button>
          </div>
          <div class="noData-table" v-if="tablesData.length == 0">
            <!-- <img :src="require('@/assets/noData.gif')" alt="no Data" /> -->
            <span>No Table Data</span>
          </div>
          <!-- button action start -->
          <div class="btn-table">
            <Button @click="handleAddTableRow()" class="p-button-icon">
              <i class="pi pi-plus"></i>
            </Button>
          </div>
          <!-- button action end -->
        </div>
        <!-- table body end -->
      </div>
      <!-- Table end -->
      <div v-if="!isPreview" class="previewButton">
        <Button @click="handleSubmit"> Preview </Button>
      </div>

      <!-- Form preview start -->
      <div v-if="isPreview" class="previewFormContainer">
        <div class="previewHeader">
          <i @click="closePreview" class="pi pi-arrow-left" />
          <h1>Form Preview</h1>
        </div>
        <div class="previewContainer">
          <div
            v-for="tableData in tablesData"
            :key="tableData"
            class="formInput"
          >
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
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import Calendar from "primevue/calendar";

export default {
  name: "form-generator",
  components: {
    InputText,
    Button,
    Textarea,
    Dropdown,
    Checkbox,
    RadioButton,
    Calendar,
  },
  data: () => ({
    textAreaEndScript: "",
    jsURL: "",
    isPreview: false,
    allCss: [{ css: "" }],
    allJs: [{ js: "" }],
    tableHeadData: [
      "Name",
      "Type",
      "Label",
      "Value",
      "View",
      "Edit",
      "Event",
      "GM",
    ],
    types: [
      { name: "Textbox" },
      { name: "Checkbox" },
      { name: "Radio Group" },
      { name: "Textarea" },
      { name: "Select" },
      { name: "Calender" },
      { name: "Button" },
    ],
    tablesData: [
      {
        name: "",
        type: "",
        label: "",
        value: "",
        view: true,
        edit: true,
        event: "",
        gm: "",
      },
    ],
    previewOptions: ["Option 1", "Option 2", "Option 3"],
    GM: [{ name: "PHONE" }, { name: "EMAIL" }, { name: "STATE" }],
  }),

  methods: {
    handleAddCssURL() {
      this.allCss.push({ css: "" });
    },
    handleAddJsURL() {
      this.allJs.push({ js: "" });
    },
    handleDeleteCss(index) {
      this.allCss.splice(index, 1);
    },
    handleDeleteJsURL(index) {
      this.allJs.splice(index, 1);
    },
    handleAddTableRow() {
      this.tablesData.push({
        name: "",
        type: "",
        label: "",
        value: "",
        view: true,
        edit: true,
        event: "",
        gm: "",
      });
    },
    handleDeleteTableRow(index) {
      this.tablesData.splice(index, 1);
    },
    handleSubmit() {
      if (
        this.allCss[0].css !== "" &&
        this.allJs[0].js !== "" &&
        this.textAreaEndScript &&
        this.tablesData[0].type !== ""
      ) {
        const obj = {
          cssData: this.allCss,
          jsData: this.allJs,
          endScript: this.textAreaEndScript,
          tables: this.tablesData,
        };
        this.isPreview = true;
        console.log(obj, "obj");
      } else {
        alert("Please fill all field");
      }
    },
    closePreview() {
      this.isPreview = false;
    },
  },
};
</script>

<style scoped>
@import "https://github.com/GSOLANKI922/css/blob/main/index.css";

.formContainer {
  display: flex;
  padding-inline: 15%;
  flex-direction: column;
}

.inputContainer {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 15px;
}

.subContainer {
  display: flex;
  flex-direction: column;
}

.btn-table {
  position: absolute;
  right: -9%;
  top:38px;
}

.container {
  position: relative;
  margin-top: 20px;
}

.p-button-icon {
  height: 40px;
  width: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.p-input {
  flex: 1;
}

.fieldContainer {
  display: flex;
  flex-direction: column;
}

.fieldContainer > button {
  width: max-content;
  margin-top: 10px;
}

.option {
  margin-left: 10px;
  font-weight: 700;
}

.noData {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-weight: 700;
  font-size: 20px;
  color: red;
}

.p-cancel {
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border: none;
  background-color: red;
}

.p-cancel:hover {
  background-color: red;
}

.url {
  font-weight: 700;
  font-size: 20px;
}

.previewButton {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
}

.pi-spinner {
  margin-right: 10px;
}

.cssContainer {
  display: flex;
  align-items: center;
  width: 100%;
}

.tableContainer {
  margin-top: 25px;
}

.tableBody {
  position: relative;
}

.tableHead {
  background-color: #f8f9fa;
  padding-block: 15px;
  padding-inline: 10px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 1fr 1fr 2fr 2fr;
  align-items: center;
  border-radius: 3px;
}

.tableHead > span {
  font-weight: 600;
  margin-left: 5px;
}

.tableRow {
  border-top: 1px solid lightgray;
  display: grid;
  padding: 10px;
  padding-block: 20px;
  gap: 10px;
  position: relative;
  grid-template-columns: 2fr 2fr 2fr 2fr 1fr 1fr 2fr 2fr;
  align-items: center;
}
.tableRow:first-child {
  border-top: 0px;
  margin-top: 10px;
}

.inputContainer {
  width: 100%;
}

.inputContainer > .p-input {
  width: 100%;
}

.inputCheckbox {
  width: 20px;
  margin-left: 10px;
  height: 20px;
}

.btn {
  position: absolute;
  right: -5%;
  top: 39px;
}
.p-table-cancel {
  height: 40px;
  position: absolute;
  right: -4%;
  bottom: 22px;
  width: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border: none;
  background-color: red;
}

.p-table-cancel:hover {
  background-color: red;
}

.noData-table {
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  margin-bottom: 30px;
  align-items: center;
}

.noData-table > img {
  height: 100%;
  width: 400px;
  object-fit: cover;
}

.noData-table > span {
  color: red;
  font-weight: 700;
  font-size: 20px;
}
</style>
