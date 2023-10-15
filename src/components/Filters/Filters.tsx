import React, { useState, useEffect, useCallback } from "react";
import competitionStore from "../../stores/CompetitionStore";
import Dropdown from "../common/DropdownComponent/Dropdown";
import { ApplicationModel } from "../../models/ApplicationModel";
import searchIcon from "../../assets/images/searchIcon.png";

function Filters() {
  const [searchVal, setSearchVal] = useState("");
  const [programValue, setProgramValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [disciplineValue, setDisciplineValue] = useState("");

  const programsList = ["All", "Obavezni program", "Univerzalni program"];
  const disciplineList = [
    "All",
    "WAG",
    "MAG",
    "Rhythmic Gymnastics",
    "Acrobatic Gymnastics",
  ];

  const categoriesList = [
    "All",
    "Djecaci",
    "Djevojčice",
    "Mlađe djevojčice",
    "Starije Djevojcice",
    "Stariji Djecaci",
  ];
  const status = ["All", "applied", "canceled", "awaiting response"];

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
          (statusValue === "" || app.status === statusValue) &&
          (disciplineValue === "" || app.discipline === disciplineValue)
        );
      });
    },
    [searchVal, programValue, categoryValue, statusValue, disciplineValue]
  );

  useEffect(() => {
    competitionStore.allApplications = filterApplications(
      competitionStore.originalApplications
    );
  }, [searchVal, programValue, categoryValue, statusValue, filterApplications]);

  useEffect(() => {
    if (disciplineValue === "All") {
      setDisciplineValue("");
    }
    if (programValue === "All") {
      setProgramValue("");
    }
    if (categoryValue === "All") {
      setCategoryValue("");
    }
    if (statusValue === "All") {
      setStatusValue("");
    }
  }, [disciplineValue, programValue, categoryValue, statusValue]);

  return (
    <div className="filters-container">
      <div className="search-filter">
        <img src={searchIcon} alt="search icon" className="search-icon" />
        <input
          className="searchField"
          type="text"
          placeholder="Search gymnasts"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
      <div className="dropdowns-filters">
        <Dropdown
          value={disciplineList[0]}
          items={disciplineList}
          isFilter={true}
          label="Discipline"
          onValueChange={(newVal) => setDisciplineValue(newVal)}
        />
        <Dropdown
          value={programsList[0]}
          items={programsList}
          isFilter={true}
          label="Program"
          onValueChange={(newVal) => setProgramValue(newVal)}
        />
        <Dropdown
          value={categoriesList[0]}
          items={categoriesList}
          isFilter={true}
          label="Category"
          onValueChange={(newVal) => setCategoryValue(newVal)}
        />
        <Dropdown
          value={status[0]}
          items={status}
          isFilter={true}
          label="Status"
          onValueChange={(newVal) => setStatusValue(newVal)}
        />
      </div>
    </div>
  );
}

export default Filters;
