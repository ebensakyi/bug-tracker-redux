import configureStore from "./store_/configureStore"

import { projectAdded, projectResolved,projectRemoved } from "./store_/projects";
import { bugAdded, bugResolved,bugRemoved } from "./store_/bugs";
import { userAdded,userRemoved } from "./store_/users";

const store = configureStore();


store.dispatch(userAdded({ description: "user1 added" }));
store.dispatch(userAdded({ description: "user2 added" }));
store.dispatch(userAdded({ description: "user3 added" }));
store.dispatch(userRemoved({ id: 1 }));

store.dispatch(bugAdded({ description: "bug1 added" }));
store.dispatch(bugAdded({ description: "bug2 added" }));
store.dispatch(bugAdded({ description: "bug3 added" }));
store.dispatch(bugResolved({ id: 1 }));

store.dispatch(bugRemoved({ id: 2}));

store.dispatch(projectAdded({ description: "project1 added" }));
store.dispatch(projectAdded({ description: "project2 added" }));
store.dispatch(projectAdded({ description: "project3 added" }));
store.dispatch(projectAdded({ description: "project4 added" }));
store.dispatch(projectRemoved({ id: 1 }));

store.dispatch(projectResolved({ id: 4 }));

console.log("App Store", store.getState());

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
