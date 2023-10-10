import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
import React from "react";
import Grid from "../components/Grid/Grid";
import Filters from "../components/Filters/Filters";
import MasterGrid from "../components/MasterGrid/MasterGrid";
import competitionStore from "../stores/CompetitionStore";
const dataSource = [
  {
    id: "941aaa5f-c505-41ed-ad0c-48ab69f4df3e",
    firstName: "Eric",
    lastName: "Stokes",
    country: "HR",
    phone: "1-941-592-8092",
    discipline: "WAG",
    programName: "Obavezni program",
    categoryName: "Djevojčice",
    teamName: "methodical Tactics",
    status: "applied",
    date: "Mon Oct 09 2023 06:46:00 GMT+0000 (Coordinated Universal Time)",
    club: "GK Ferry Inc",
    dateOfBirth:
      "Thu Aug 10 2023 19:51:46 GMT+0000 (Coordinated Universal Time)",
  },
  {
    id: "b4943287-7401-4521-b600-e2695db87e3b",
    firstName: "Sadye",
    lastName: "Thompson",
    country: "HR",
    phone: "1-380-486-8902 x27940",
    discipline: "WAG",
    programName: "Obavezni program",
    categoryName: "Djevojčice",
    teamName: "homogeneous Avon",
    status: "canceled",
    date: "Mon Oct 09 2023 15:21:02 GMT+0000 (Coordinated Universal Time)",
    club: "GK Jacobs - Anderson",
    dateOfBirth:
      "Fri Nov 25 2022 15:29:07 GMT+0000 (Coordinated Universal Time)",
  },
  {
    id: "f5f11625-3286-4f2a-8def-128ba58d351f",
    firstName: "Burnice",
    lastName: "Hoeger",
    country: "HR",
    phone: "948.963.8159 x1435",
    discipline: "WAG",
    programName: "Obavezni program",
    categoryName: "Starije Djevojčice",
    teamName: "scale program",
    status: "declined",
    date: "Mon Oct 09 2023 07:19:20 GMT+0000 (Coordinated Universal Time)",
    club: "GK O&#x27;Conner LLC",
    dateOfBirth:
      "Sun Jul 02 2023 06:22:40 GMT+0000 (Coordinated Universal Time)",
  },
  {
    id: "52b5f5df-902e-46c1-8d44-0bf13acdb47b",
    firstName: "Heather",
    lastName: "Macejkovic",
    country: "HR",
    phone: "(534) 348-6062 x6993",
    discipline: "WAG",
    programName: "Obavezni program",
    categoryName: "Djevojčice",
    teamName: "Investment Small",
    status: "applied",
    date: "Mon Oct 09 2023 17:56:44 GMT+0000 (Coordinated Universal Time)",
    club: "GK Bartell - Russel",
    dateOfBirth:
      "Thu Jun 29 2023 05:04:15 GMT+0000 (Coordinated Universal Time)",
  },
  {
    id: "658f7db9-2eb9-482a-978c-0b4b849d8dbd",
    firstName: "Vivianne",
    lastName: "Lubowitz",
    country: "HR",
    phone: "(722) 670-5582 x20848",
    discipline: "WAG",
    programName: "Obavezni program",
    categoryName: "Mlađe djevojčice",
    teamName: "transmit Fresh",
    status: "awaiting response",
    date: "Mon Oct 09 2023 02:01:34 GMT+0000 (Coordinated Universal Time)",
    club: "GK Mante - Greenholt",
    dateOfBirth:
      "Wed Apr 05 2023 09:12:09 GMT+0000 (Coordinated Universal Time)",
  },
  {
    id: "9c6ad97e-ea46-45f7-93b9-707a076f426b",
    firstName: "Dianna",
    lastName: "Schuppe",
    country: "HR",
    phone: "530.481.0789",
    discipline: "WAG",
    programName: "Univerzalni program",
    categoryName: "Djevojčice",
    teamName: "Serbia Consultant",
    status: "applied",
    date: "Mon Oct 09 2023 00:07:48 GMT+0000 (Coordinated Universal Time)",
    club: "GK Fay - Schulist",
    dateOfBirth:
      "Wed Nov 02 2022 05:40:02 GMT+0000 (Coordinated Universal Time)",
  },
];

function Competition() {
  const columns = competitionStore.gridColumns.getDefaultColumns();
  console.log("columns", columns);
  return (
    <div>
      <Grid
        dataSource={dataSource}
        columns={columns}
        buttonText="Add new application"
        status="Open"
        showMasterDetail={true}
        masterGridComponent={MasterGrid}
        title="My Applications"
        filters={Filters}
      ></Grid>
    </div>
  );
}

export default Competition;
