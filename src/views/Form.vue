<template>
  <div class="background-image">
    <b-container class="mt-5">
      <b-card header-tag="header">
        <template v-slot:header class="header-card">
          <img src="../assets/2.jpg" alt="company-logo" class="company-image" />
          <h2>AppForms-Controls-UI</h2>
        </template>
        <b-row>
          <b-col cols="10">
            <h3>Grid UI # 1</h3>
          </b-col>
          <b-col>
            <span class="table-sort">Sort By:</span>
            <div class="dropdown-table">
              <b-dropdown text="Recent"></b-dropdown>
            </div>
          </b-col>
        </b-row>
        <div>
          <b-table head-variant="light" outlined responsive :items="items" thead-class="table-header">
            <template v-slot:head(name)="data">
              <span class="table-name">{{ data.label }}</span>
            </template>
            <template v-slot:head(actions)="data">
              <span class="table-actions">{{ data.label }}</span>
            </template>
            <template v-slot:head(project)="data">
              <span class="table-project">{{ data.label }}</span>
            </template>
            <template v-slot:cell(name)>
              <b-avatar variant="info" text="J" class="mr-3"></b-avatar>
              <span class="mr-auto user-name">Jonathan Chapman</span>
            </template>
            <template v-slot:cell(project)>
              <span class="mr-auto project-name">Analysis for Helix</span>
            </template>
            <template v-slot:cell(date)>
              <span class="mr-auto table-date">07/24/2020</span>
            </template>
            <template v-slot:cell(status)>
              <b-icon icon="exclamation-circle-fill" variant="danger" class="mr-3"></b-icon>
              <span class="mr-auto status">Pending</span>
            </template>
            <template v-slot:cell(progress)>
              <md-progress-bar md-mode="determinate" class="md-accent" :md-value="53">53%</md-progress-bar>
              <span class="mr-auto progress-percentage">53%</span>
            </template>

            <template v-slot:cell(actions)>
              <b-button size="sm" variant="light">
                <font-awesome-icon :icon="['fa', 'envelope']" class="pencil-icon" />
              </b-button>
              <b-button size="sm" variant="light" class="button-pencil">
                <font-awesome-icon :icon="['fas', 'pencil-alt']" class="pencil-icon" />
              </b-button>
            </template>
          </b-table>
        </div>
        <div class="overflow-auto">
          <b-pagination
            hide-goto-end-buttons
            first-number
            pills
            :total-rows="50"
            size="sm"
            align="right"
          ></b-pagination>
        </div>
      </b-card>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 33.333333333,
      max: 50,
    };
  },
};
</script>
<script>
export default {
  data() {
    return {
      rows: 100,
      currentPage: 1,
    };
  },
};
</script>
<script>
export default {
  name: "ProgressBarDeterminate",
  data: () => ({
    amount: 53,
  }),
};
</script>
<script>
export default {
  data() {
    return {
      items: [
        {
          Name: "Stephen Anderson",
          Project: "Analysis for Helix",
          Date: "07/24/2020",
          Status: "Macdonald",
          Progress: "Macdonald",
          Actions: "Macdonald",
        },
        {
          Name: "Jonathan Chapman",
          Project: "Analysis for Helix",
          Date: "07/24/2020",
          Status: "Macdonald",
          Progress: "Macdonald",
          Actions: "Macdonald",
        },
        {
          Name: "Keith Bulter",
          Project: "Analysis for Helix",
          Date: "07/24/2020",
          Status: "Macdonald",
          Progress: "Macdonald",
          Actions: "Macdonald",
        },
        {
          Name: "Luke Davidson",
          Project: "Analysis for Helix",
          Date: "07/24/2020",
          Status: "Macdonald",
          Progress: "Macdonald",
          Actions: "Macdonald",
        },
        {
          Name: "Matt Persons",
          Project: "Analysis for Helix",
          Date: "07/24/2020",
          Status: "Macdonald",
          Progress: "Macdonald",
          Actions: "Macdonald",
        },
        {
          Name: "Neil Jones",
          Project: "Analysis for Helix",
          Date: "07/24/2020",
          Status: "Macdonald",
          Progress: "Macdonald",
          Actions: "Macdonald",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.background-image {
  background-image: url("../assets/1.jpg");
  height: 100%;
  background-size: cover;
  padding-top: 1px;
  padding-bottom: 40px;
}
.company-image {
  width: 120px;
  height: 45px;
}
.b-icon.bi {
  font-size: 14px;
}
.mr-3,
.mx-3 {
  margin-right: 11px !important;
}
.table-name {
  padding-left: 15px;
 

}
.table-actions {
  padding-left: 41px;
    @media only screen and (max-width: 1200px) {
  padding-left: 19px;
  }
  @media only screen and (max-width: 900px) {
  padding-left: 0px;
  }
  @media only screen and (max-width: 600px) {
  padding-left: 0px;
  }

}
.table-project {
  padding-left: 11px;
}
.b-pagination-pills .page-item .page-link {
  border-radius: 50rem !important;
  margin-left: 0.25rem;
  line-height: 1;
  font-size: 12px !important;
  font-weight: bold;
}
.table-responsive {
  display: block;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 6px;
}
.pencil-icon {
  font-size: 12px;
  color: #9aa4c0;
}
/deep/.page-item.active .page-link {
  z-index: 3;
  color: #5d5d5d;
  background-color: transparent;
}
/deep/.page-link {
  position: relative;
  display: block;

  color: #5d5d5d;
  background-color: #fff;
  border: none;
  font-weight: 600;
}
/deep/.md-progress-bar.md-theme-default.md-determinate.md-accent {
  background-color: #e3e8ed;
  width: 110px;
  margin-top: 11px;
  margin-right: -13px;
}
/deep/.md-progress-bar.md-theme-default.md-determinate.md-accent
  .md-progress-bar-fill {
  background-color: #ef5362;
}
/deep/.page-link:hover {
  z-index: 2;
  color: #5d5d5d;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
  font-weight: 600;
}
/deep/.btn-secondary {
  color: #24b4d6;
  background-color: transparent;
  border: none;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 13px;
}
/deep/.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
  padding: 1px;
}
.card-body {
  padding-right: 40px;
  padding-left: 40px;
  h3 {
    font-size: 16px;
    font-family: "Roboto";
    color: #7c849a;
    margin-top: 5px;
    margin-bottom: 11px;
  }
}
.dropdown-table {
  float: right;
}
.card-header {
  background-color: white;
  margin-top: 9px;
  margin-left: 15px;
  padding-bottom: 20px;
  h2 {
    font-size: 14px;
    display: inline-block;
    color: #6b7381;
    margin-left: 10px;
    font-weight: 500;
    font-family: "Roboto";
  }
}
.table-sort {
  font-size: 10.5px;
  font-family: "Roboto";
  color: #7c849a;
  font-weight: 400;
  margin-left: 38px;
  @media only screen and (max-width: 1200px) {
    margin-left: 7px;
  }
  @media only screen and (max-width: 900px) {
    margin-left: -35px;
  }
}
/deep/.btn-secondary:hover {
  color: #24b4d6;
  background-color: transparent;
  border: none;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 13px;
}
/deep/.page-link:focus {
  z-index: 3;
  outline: 0;
  background-color: #e8ecf5 !important;
  border: none;
  box-shadow: none;
}
/deep/.btn-secondary:focus,
.btn-secondary.focus {
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}
/deep/.btn-secondary:not(:disabled):not(.disabled):active,
/deep/.btn-secondary:not(:disabled):not(.disabled).active,
/deep/.show > .btn-secondary.dropdown-toggle {
  color: #24b4d6 !important;
  background-color: transparent;
  border: none;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 13px;
}
.light {
  background-color: #f8f9fc !important;
}
/deep/.dropdown-toggle::after {
  display: inline-block;
  margin-left: 12px;
  vertical-align: 0.255em;
  content: "";
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
  color: #7c849a;
  font-size: 18px;
  margin-bottom: -3px;
}
/deep/ .table .thead-light th {
  font-size: 12px;
  color: #81899e;
  font-family: "Roboto";
  background-color: #f8f9fc;
}
/deep/ .table tr:nth-child(even) {
  background-color: #fafbfc;
}

.button-pencil {
  margin-right: 13px;
}
.btn .b-icon.bi,
.nav-link .b-icon.bi,
.dropdown-toggle .b-icon.bi,
.dropdown-item .b-icon.bi,
.input-group-text .b-icon.bi {
  font-size: 100%;
  vertical-align: text-bottom;
  color: #9aa4c0;
}
.user-name {
  font-size: 11.5px;
  font-weight: bold;
  color: #0e1a35;
  font-family: "Roboto";
  margin-left: 10px;

  @media only screen and (max-width: 900px) {
    margin-left: 0px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0px;
  }
}
.project-name {
  font-size: 11.5px;
  font-weight: bold;
  color: #4e535f;
  font-family: "Roboto";
  margin-left: 11px;
  @media only screen and (max-width: 900px) {
    margin-left: 0px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0px;
  }
}
.status {
  font-size: 11.5px;
  font-weight: bold;
  color: #4e535f;
  font-family: "Roboto";
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  background-color: #e8ecf5;
  float: right;
  margin-right: 12px;
}
.table-date {
  font-size: 11.5px;
  font-weight: bold;
  color: #4e535f;
  font-family: "Roboto";
  // margin-left: 13px;
}
.progress-percentage {
  font-size: 11.5px;
  font-weight: bold;
  color: #4e535f;
  font-family: "Roboto";
  margin-left: 13px;
  float: right;
  margin-top: -10px;
  @media only screen and (max-width: 1200px) {
    margin-top: 0px;
  }
  @media only screen and (max-width: 900px) {
    margin-top: 0px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0px;
  }
}
.b-avatar {
  width: 27px !important;
  height: 27px !important ;
  background-color: #22c2e2;
  margin-top: 0px;
  margin-left: 15px;
}
</style>