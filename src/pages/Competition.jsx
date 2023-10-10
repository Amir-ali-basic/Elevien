import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
import React from "react";
import Grid from "../components/Grid/Grid";
import Filters from "../components/Filters/Filters";
import MasterGrid from "../components/MasterGrid/MasterGrid";
import competitionStore from "../stores/CompetitionStore";

function Competition() {
  const columns = competitionStore.gridColumns.getDefaultColumns();
  const dataSource = competitionStore.gridDataSource;
  const masterGridData = competitionStore.masterDetails;
  console.log("columns", columns);
  console.log("dataSource", dataSource);
  console.log("masterGridData", masterGridData);

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
      ></Grid>
    </div>
  );
}

export default Competition;
