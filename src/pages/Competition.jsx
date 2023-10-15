import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
import Grid from "../components/Grid/Grid";
import Filters from "../components/Filters/Filters";
import MasterGrid from "../components/MasterGrid/MasterGrid";
import competitionStore from "../stores/CompetitionStore";
import ModalDialog from "../components/common/ModalDialog/ModalDialog";
import ApplicationForm from "../components/ApplicationForm/ApplicationForm";
import ErrorComponent from "../components/ApiErrorComponent/ErrorComponent";
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
        totalCount={competitionStore.allApplications.length}
      ></Grid>
      <ModalDialog
        isVisible={competitionStore.applicationModalVisibility}
        title="Your Modal Title"
        showTitle={true}
        abortButtonText="Cancel"
        confirmButtonText="Confirm"
        abort={() => competitionStore.abortButtonHandler()}
        confirm={() => competitionStore.formSubmit()}
      >
        <ApplicationForm />
      </ModalDialog>
      <ErrorComponent isVisible={competitionStore.haveApiError} />
    </div>
  );
});

export default Competition;
