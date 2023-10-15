import React, { useState, useEffect, useCallback } from "react";
import competitionStore from "../../stores/CompetitionStore";
import Dropdown from "../common/DropdownComponent/Dropdown";
import { ApplicationModel } from "../../models/ApplicationModel";

function Filters() {
  const [searchVal, setSearchVal] = useState("");
  const [programValue, setProgramValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [statusValue, setStatusValue] = useState("");

  const clearFilter = () => {
    setSearchVal("");
    setProgramValue("");
    setCategoryValue("");
    setStatusValue("");
  };

  const test = ["selectValue", "Obavezni program", "Univerzalni program"];
  const categoriesList = [
    "Djecaci",
    "Djevojčice",
    "Mlađe djevojčice",
    "Starije Djevojcice",
    "Stariji Djecaci",
  ];
  const status = ["applied", "canceled", "awaiting response"];

  // Define filterApplications using useCallback
  const filterApplications = useCallback(
    (applications: ApplicationModel[]) => {
      return applications.filter((app) => {
        return (
          (searchVal.trim() === "" ||
            app.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
            app.lastName.toLowerCase().includes(searchVal.toLowerCase())) &&
          (programValue === "" || app.programName === programValue) &&
          (categoryValue === "" || app.categoryName === categoryValue) &&
          (statusValue === "" || app.status === statusValue)
        );
      });
    },
    [searchVal, programValue, categoryValue, statusValue]
  );

  useEffect(() => {
    // Apply filters to competitionStore.allApplications
    competitionStore.allApplications = filterApplications(
      competitionStore.originalApplications
    );
  }, [searchVal, programValue, categoryValue, statusValue, filterApplications]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <Dropdown
        value={test[0]}
        items={test}
        onValueChange={(newVal) => setProgramValue(newVal)}
      />
      <Dropdown
        value={categoriesList[0]}
        items={categoriesList}
        onValueChange={(newVal) => setCategoryValue(newVal)}
      />
      <Dropdown
        value={status[0]}
        items={status}
        onValueChange={(newVal) => setStatusValue(newVal)}
      />
      <button>Search</button> <button onClick={clearFilter}>Clear</button>
    </div>
  );
}

export default Filters;
