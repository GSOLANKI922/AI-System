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

			<!-- end script start -->

			<!-- Table start -->

            <div class="inputContainer">
              <Dropdown
                v-model="tableData.type"
                optionLabel="name"
                @change="selectOption(index)"
                :options="types"
                placeholder="Select Types"
              />
            </div>
            <!-- add options start -->
            <div
              v-if="tableData.type.name == 'Select' && optionModel == index"
              class="optionContainer"
            >
              <div
                class="optionsRow"
                v-for="option in tableData.options"
                :key="option"
              >
                <div class="inputOption">
                  <InputText
                    v-model="option.name"
                    placeholder="Add your option"
                    class="p-input-options"
                  />
                </div>
              </div>
              <!-- add option button start -->
              <div class="optionButton">
                <Button @click="addOption(index)">+ Add Option</Button>
                <Button
                  @click="closeModel(tableData.options)"
                  class="p-closeModel"
                  >Close Model</Button
                >
              </div>
              <!-- add option button end -->
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
            <Button @click="handleAddTableRow" class="p-button-icon">
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

				<div class="tableHead">

					<span v-for="tableData in tableHeadData" :key="tableData">{{
					
					tableData 
					
					}}</span>

				</div>

				<!-- table head end -->

				<!-- table body start -->

				<div class="tableBody">

					<div v-for="(tableData, index) in tablesData" :key="tableData" class="tableRow">

						<div class="inputContainer">

							<InputText :key="index" v-model="tableData.name" class="p-input" type="text" />

						</div>

						<div class="inputContainer">

							<Dropdown v-model="tableData.type" optionLabel="name" @change="selectOption(index)"
								:options="types" placeholder="Select Types" />

						</div>

						<!-- add options start -->

						<div v-if="tableData.type.name == 'Select' && optionModel == index" class="optionContainer">

							<div class="optionsRow" v-for="option in tableData.options" :key="option">

								<div class="inputOption">

									<InputText v-model="option.name" placeholder="Add your option"
										class="p-input-options" @keydown="keyDownError()" />

								</div>

							</div>

							<!-- add option button start -->

							<p v-if="error" class="alert">*All fields required</p>

							<div class="optionButton">

								<Button @click="addOption(index)">+ Add Option</Button>

								<Button @click="closeModel(tableData.options,index)" class="p-closeModel">Close

									Model </Button>

							</div>

							<!-- add option button end -->

						</div>

						<div class="inputContainer">

							<InputText v-model="tableData.label" class="p-input" type="text" />

						</div>

						<div class="inputContainer">

							<InputText v-model="tableData.value" class="p-input" type="text" />

						</div>

						<div class="inputContainer">

							<input v-model="tableData.view" class="inputCheckbox" type="checkbox" />

						</div>

						<div class="inputContainer">

							<input v-model="tableData.edit" class="inputCheckbox" type="checkbox" />

						</div>

						<div class="inputContainer">

							<inputText v-model="tableData.event" class="p-input" type="text" />

						</div>

						<div class="inputContainer">
							<Dropdown v-model="tableData.gm" optionLabel="name" :options="GM" placeholder="Select GM"/>

						</div>

						<Button @click="handleDeleteTableRow(index)" class="p-table-cancel">

							<i class="pi pi-minus"></i>

						</Button>

					</div>

					<div class="noData-table" v-if="tablesData.length == 0">

						<img :src="require('@/assets/noData.gif')" alt="no Data"/>

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

			<!-- T able end -->

			<div v-if="!isPreview" class="previewButton">

				<Button @click="handleSubmit"> Preview </Button>

			</div>

			<!-- Form preview start -->

			<PreviewFormVue @preview="isPreviewClose($event)" :isPreview="isPreview" :tablesData="tablesData" />

			<!-- Form preview end -->

		</div>

	</div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import PreviewFormVue from "@/components/PreviewForm.vue";
export default {
  name: "form-generator",
  components: {
    InputText,
    Button,
    Textarea,
    Dropdown,
    PreviewFormVue,
  },
  data: () => ({
    textAreaEndScript: "",
    jsURL: "",
    isPreview: false,
    optionModel: -1,
    allCss: [
      {
        css: "",
      },
    ],
    allJs: [
      {
        js: "",
      },
    ],
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
      {
        name: "Textbox",
      },
      {
        name: "Checkbox",
      },
      {
        name: "Radio Group",
      },
      {
        name: "Time Picker",
      },
      {
        name: "Textarea",
      },
      {
        name: "Select",
      },
      {
        name: "Color Picker",
      },
      {
        name: "Calender",
      },
      {
        name: "Button",
      },
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
        options: [
          {
            name: "",
          },
        ],
      },
    ],
    GM: [
      {
        name: "PHONE",
      },
      {
        name: "EMAIL",
      },
      {
        name: "STATE",
      },
    ],
  }),
  methods: {
    handleAddCssURL() {
      this.allCss.push({
        css: "",
      });
    },
    handleAddJsURL() {
      this.allJs.push({
        js: "",
      });
    },
    selectOption(index) {
      this.optionModel = index;
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
        script: "",
        options: [
          {
            name: "",
          },
        ],
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

        // Create new link Element
        var link = document.createElement("link");
        // set the attributes for link element

        link.rel = "stylesheet";
        link.href = this.allCss[0].css;
        link.href = this.allJs[0].js;
        document.getElementsByTagName("HEAD")[0].appendChild(link);
        this.isPreview = true;
        console.log(obj, "obj");
      } else {
        alert("Please fill all field");
      }
    },
    closeModel(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "") {
          this.optionModel = 0;
          return;
        }
      }

      this.optionModel = -1;
    },
    isPreviewClose(preview) {
      this.isPreview = preview;
    },
    addOption(tableIndex) {
      this.tablesData.map((tableData, index) => {
        if (tableIndex == index) {
          tableData.options.push({
            name: "",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.formContainer {
  display: flex;
  width: 100%;
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
  top: 38px;
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
  margin-left: 20px;
}

.tableRow {
  border-top: 1px solid lightgray;
  display: grid;
  position: relative;
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

.inputOption {
  display: flex;
  align-items: center;
}

.inputOption > .p-cancel {
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border: none;
  background-color: red;
}

.btn {
  position: absolute;
  right: -5%;
  top: 45px;
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
  transition: all 0.6s ease-in-out;
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

.optionContainer {
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  border-radius: 5px;
  min-width: 180px;
  top: 0%;
  bottom: 0;
  z-index: 999;
  left: 14%;
  height: max-content;
  padding: 10px;
  max-height: 215px;
  overflow: scroll;
}

.optionContainer::-webkit-scrollbar {
  display: none;
}

.optionsRow {
  width: 100%;
}

.p-input-options {
  border: none;
  width: 100%;
  border-radius: 0px;
  border-bottom: 1px solid lightgray;
}

.p-input-options:focus {
  outline: none;
  border-color: none;
  box-shadow: none;
}

.p-closeModel {
  background-color: red;
  margin-left: 5px;
  border: none;
}

.p-closeModel:hover {
  background-color: red;
}

.optionButton {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>
