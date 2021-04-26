import configureStore from "./store-with-react-toolkit/configureStore";

import {
  projectAdded,
  projectResolved,
  projectRemoved, 
} from "./store-with-react-toolkit/projects";
import {
  bugAdded,
  bugAssignedToUser,
  bugResolved,
  bugRemoved,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store-with-react-toolkit/bugs";
import { userAdded } from "./store-with-react-toolkit/users";
const store = configureStore();

store.dispatch({
  type: "apiCallBegan",
  payload:{
  url: "/bugs",
  onSuccess: "bugsReceived",
  onError: "apiRequestFailed"
  }
});

store.dispatch({ type: "error", payload: { message: "An error ocuured" } });

store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));

// store.dispatch(bugAdded({ description: "bug1 added" }));
// store.dispatch(bugAdded({ description: "bug2 added" }));
// store.dispatch(bugAdded({ description: "bug3 added" }));
// store.dispatch(bugResolved({ id: 1 }));

// //store.dispatch(bugRemoved({ id: 2 }));

// store.dispatch(projectAdded({ description: "project1 added" }));
// store.dispatch(projectAdded({ description: "project2 added" }));
// store.dispatch(projectAdded({ description: "project3 added" }));
// store.dispatch(projectAdded({ description: "project4 added" }));
// //store.dispatch(projectRemoved({ id: 1 }));

// store.dispatch(projectResolved({ id: 4 }));

// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
const userBugs = getBugsByUser(1)(store.getState());

console.log("unresolvedBugs", unresolvedBugs);
console.log("userBugs", userBugs);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// import configureStore from "./with-redux-toolkit/configureStore";

// import { addproject, resolveproject } from "./store/projects";

// const store = configureStore()

// store.dispatch(addproject("project1 added"));
// store.dispatch(addproject("project2 added"));
// store.dispatch(addproject("project3 added"));
// store.dispatch(addproject("project4 added"));
// store.dispatch(addproject("project5 added"));

// store.dispatch(resolveproject(3));

// console.log("App Store", store.getState());

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
