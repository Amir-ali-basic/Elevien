import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
import React, { useState } from "react";
import Grid from "../components/Grid/Grid";
import Filters from "../components/Filters/Filters";
import MasterGrid from "../components/MasterGrid/MasterGrid";
import competitionStore from "../stores/CompetitionStore";
import ModalDialog from "../components/ModalDialog/ModalDialog";
import ApplicationForm from "../components/ApplicationForm/ApplicationForm";

function Competition() {
  //TODO: modal titile i close(x) treba popraviti
  //TODO: Grid columns treba da pozove button sa stilom
  //TODO: CSS je ocajan - refactoring
  const columns = competitionStore.gridColumns.getDefaultColumns();
  const dataSource = competitionStore.gridDataSource;
  const masterGridData = competitionStore.masterDetails;
  //Oovo je ocajna praksa da bilo kakva logika bude u komponenti !!!!
  const [isApplicationModalVisible, setIsApplicationModalVisible] =
    useState(false);
  function addNewApplication() {
    competitionStore.applicationModalVisibility.show();
    setIsApplicationModalVisible(true);
  }

  function apply() {
    console.log("no dta component action");
  }

  return (
    <div>
      <Grid
        dataSource={dataSource}
        columns={columns}
        buttonText="Add new application"
        status="Open"
        showMasterDetail={true}
        masterGridComponent={MasterGrid}
        masterGridData={masterGridData}
        title="My Applications"
        filters={Filters}
        addNewAction={() => addNewApplication()}
        noDataActionButton={() => apply()}
      ></Grid>
      <ModalDialog
        isVisible={isApplicationModalVisible}
        title="Your Modal Title"
        showTitle={true}
        abortButtonText="Cancel"
        confirmButtonText="Confirm"
        abort={() => setIsApplicationModalVisible(false)}
        confirm={() => competitionStore.confirmButtonHandler()}
      >
        {/* Content of your modal */}
        <ApplicationForm />
      </ModalDialog>
    </div>
  );
}

export default Competition;
