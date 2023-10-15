import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
import Grid from "../components/Grid/Grid";
import Filters from "../components/Filters/Filters";
import MasterGrid from "../components/MasterGrid/MasterGrid";
import competitionStore from "../stores/CompetitionStore";
import ModalDialog from "../components/common/ModalDialog/ModalDialog";
import ApplicationForm from "../components/ApplicationForm/ApplicationForm";
import ErrorComponent from "../components/ApiErrorComponent/ErrorComponent";
import { LoadPanel } from "devextreme-react/load-panel";
import { observer } from "mobx-react";

const Competition = observer(() => {
  //TODO: Grid columns treba da pozove button sa stilom
  //TODO: CSS je ocajan - refactoring
  const columns = competitionStore.gridColumns.getDefaultColumns();

  //RAZMISLI MALO O OVOME UJUTRO
  const handleInitialized = (ref) => {
    competitionStore.saveGridRef(ref);
  };

  return (
    <div>
      <Grid
        dataSource={competitionStore.allApplications}
        totalCount={competitionStore.allApplications.length}
        columns={columns}
        buttonText="New application"
        status="Open"
        showMasterDetail={true}
        masterGridComponent={MasterGrid}
        masterGridData={competitionStore.masterDetails}
        title="My Applications"
        filters={<Filters />}
        addNewAction={() => competitionStore.showApplicationModal()}
        noDataActionButton={() => competitionStore.showApplicationModal()}
        initialized={handleInitialized}
      ></Grid>
      <ModalDialog
        isVisible={competitionStore.applicationModalVisibility}
        title="Apply gymnast"
        showTitle={true}
        abortButtonText="Cancel"
        confirmButtonText="Save"
        abort={() => competitionStore.abortButtonHandler()}
        confirm={() => competitionStore.formSubmit()}
      >
        <ApplicationForm />
      </ModalDialog>
      <ErrorComponent isVisible={competitionStore.haveApiError} />
      <LoadPanel
        visible={competitionStore.globalLoader}
        shadingColor="rgba(0,0,0,0.4)"
      />
    </div>
  );
});

export default Competition;
