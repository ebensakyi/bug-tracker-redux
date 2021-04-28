import configureStore from "./store/configureStore";

import {
  projectAdded,
  projectResolved,
  projectRemoved,
} from "./store/projects";
import {
  bugAdded,
  bugAssignedToUser,
  bugResolved,
  bugRemoved,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { userAdded } from "./store/users";
const store = configureStore();









//store.dispatch({type:"error",payload:{message:"An error ocuured"}})
store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    onSuccess: "bugsReceived",
    onError: "apiRequesFailed",
  },
});
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
