export const CategoriesAndPrograms: string[] = [];

const categoriesList = [
  "Djecaci",
  "Djevojcice",
  "Starije Djevojcice",
  "Stariji Djecaci",
];

const programs = ["Obavezni program", "Univerzalni program"];

for (const program of programs) {
  for (const category of categoriesList) {
    CategoriesAndPrograms.push(`${program} - ${category}`);
  }
}
