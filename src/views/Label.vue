<template >
  <div class="background-image">
    <b-container>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <b-card header-tag="header">
        <template v-slot:header class="header-card">
          <img src="../assets/2.jpg" alt="company-logo" class="company-image" />
          <h2>AppForms-Controls-UI</h2>
        </template>
        <b-row>
          <b-col>
            <form novalidate @submit.prevent="validateUser">
              <md-field>
                <md-icon class="fa fa-user"></md-icon>
                <label>Name</label>
                <md-input></md-input>
              </md-field>
              <md-field>
                <md-icon class="fa fa-map-marker"></md-icon>
                <label>Location</label>
                <md-input></md-input>
              </md-field>
              <md-field>
                <md-icon class="fa fa-address-card"></md-icon>
                <label>Addesss</label>
                <md-input></md-input>
              </md-field>

              <md-field>
                <md-icon class="fa fa-phone"></md-icon>
                <label>Phone</label>
                <md-input></md-input>
              </md-field>
              <md-field>
                <md-icon class="fa fa-envelope"></md-icon>
                <label>Email</label>
                <md-input></md-input>
              </md-field>
              <md-field>
                <label>
                  <md-icon class="fa fa-arrow-circle-up"></md-icon>

                  <span class="form-upload">Upload File</span>
                </label>
                <md-file v-model="single" />
              </md-field>
            </form>
          </b-col>
          <b-col>
            <md-icon class></md-icon>

            <md-datepicker v-model="selectedDate">
              <label>Date of Birth (MM-DD-YYYY)</label>
            </md-datepicker>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "FieldIcons",
  data: () => ({
    date: null,
    voice: null,
    description: null,
    money: null,
  }),
};
</script>

<style lang="scss" scoped>
.md-field:last-child {
  margin-bottom: 40px;
}
.md-field {
  min-height: 50px;
  width: 190px;
  margin-left: 39px;
  margin-bottom: 8px;
}
.md-icon.md-theme-default.md-icon-font {
  font-size: 5px;
  color: greem;
  color: #b1b7bf;
  font-size: 1px;
  font-size: 14px !important;
}

.md-field.md-theme-default:after {
  background-color: #ccd3dc;
}
.md-field.md-theme.md-icon.md-theme-default.md-focused label {
  color: #28313c !important;
}

.md-field.md-theme-default.md-focused .md-input,
.md-field.md-theme-default.md-focused .md-textarea,
.md-field.md-theme-default.md-has-value .md-input,
.md-field.md-theme-default.md-has-value .md-textarea {
  -webkit-text-fill-color: rgba(0, 0, 0, 0.87);
  font-size: 13px;
  font-weight: 500;
  color: #28313c;
  font-family: "Roboto";
}
.company-image {
  width: 120px;
  height: 45px;
}
.md-field.md-theme-default.md-focused label {
  color: #9199a3;
}
.md-field.md-theme-default.md-focused > .md-icon,
.md-field.md-theme-default.md-highlight > .md-icon {
  color: #4f4f4f;
}
.card-header {
  background-color: white;
  margin-top: 9px;
  margin-left: 15px;
  padding-bottom: 20px;
  h2 {
    font-size: 14.2px;
    display: inline-block;
    color: #6b7381;
    margin-left: 10px;
    font-weight: 500;
  }
}
.md-field > .md-icon ~ label {
  left: 36px;
  font-size: 12.54px;
  font-weight: 500;
  color: #b1b7bf;
}
.md-field.md-has-file:after,
.md-field.md-has-file:before,
.md-field.md-has-file label {
  left: 0px;
}
.form-upload {
  margin-left: 34px;
  left: 36px;
  font-size: 12.54px;
  font-weight: 500;
  color: #b1b7bf;
}
.md-field .md-input,
.md-field .md-textarea {
  height: 40px;
}
.background-image {
  background-image: url("../assets/1.jpg");
  height: 100vh;
  background-size: cover;
  padding-top: 40px;
}
.header-card {
  background-color: white;
  h2 {
    font-size: 12px;
    display: inline-block;
  }
}
</style>