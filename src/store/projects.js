import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    projectResolved: (projects, action) => {
      const index = projects.findIndex((project) => project.id === action.payload.id);
      projects[index].resolved = true;
    },
    projectRemoved: (projects, action) => {
     return projects.filter((project) => project.id !== action.payload.id);
    },
  },
});

export const { projectAdded, projectResolved, projectRemoved } = slice.actions;
export default slice.reducer;
