import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
import React, { useState } from "react";
import Grid from "../components/Grid/Grid";
import Filters from "../components/Filters/Filters";
import MasterGrid from "../components/MasterGrid/MasterGrid";
import competitionStore from "../stores/CompetitionStore";
import ModalDialog from "../components/common/ModalDialog/ModalDialog";
import ApplicationForm from "../components/ApplicationForm/ApplicationForm";
import ErrorComponent from "../components/ApiErrorComponent/ErrorComponent";
import { observer } from "mobx-react";

const Competition = observer(() => {
  //TODO: modal titile i close(x) treba popraviti
  //TODO: Grid columns treba da pozove button sa stilom
  //TODO: CSS je ocajan - refactoring
  const columns = competitionStore.gridColumns.getDefaultColumns();
  const dataSource = competitionStore.gridDataSource;
  const masterGridData = competitionStore.masterDetails;

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
        addNewAction={() => competitionStore.showApplicationModal()}
        noDataActionButton={() => competitionStore.showApplicationModal()}
      ></Grid>
      <ModalDialog
        isVisible={competitionStore.applicationModalVisibility}
        title="Your Modal Title"
        showTitle={true}
        abortButtonText="Cancel"
        confirmButtonText="Confirm"
        abort={() => competitionStore.abortButtonHandler()}
        confirm={() => competitionStore.sendApplication()}
      >
        <ApplicationForm />
      </ModalDialog>
      <ErrorComponent isVisible={competitionStore.haveApiError} />
    </div>
  );
});

export default Competition;
