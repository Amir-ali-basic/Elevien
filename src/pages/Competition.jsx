import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
import React, { useState } from "react";
import Grid from "../components/Grid/Grid";
import Filters from "../components/Filters/Filters";
import MasterGrid from "../components/MasterGrid/MasterGrid";
import competitionStore from "../stores/CompetitionStore";
import ModalDialog from "../components/ModalDialog/ModalDialog";

function Competition() {
  const columns = competitionStore.gridColumns.getDefaultColumns();
  const dataSource = competitionStore.gridDataSource;
  const masterGridData = competitionStore.masterDetails;
  const [isVisible, setIsVisible] = useState(false);
  function addNewApplication() {
    competitionStore.applicationModalVisibility.show();
    setIsVisible(true);
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
        isVisible={isVisible}
        title="Your Modal Title"
        showTitle={true}
        abortButtonText="Cancel"
        confirmButtonText="Confirm"
        abort={() => setIsVisible(false)}
        confirm={() =>
          console.log(
            "Confirm action",
            competitionStore.applicationModalVisibility.hide()
          )
        }
      >
        {/* Content of your modal */}
        <p>This is the modal content.</p>
      </ModalDialog>
    </div>
  );
}

export default Competition;
