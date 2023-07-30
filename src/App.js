import logo from './logo.svg';
import './App.css';
import ListProjectsComponent from './component/ListProjectsComponent';
import CreateProjectComponent from './component/CreateProjectComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import YourProjectsComponent from './component/YourProjectsComponent';
import LoginComponent from "./component/LoginComponent";
import MainComponent from "./component/MainComponent"


function App() {

  return (
    <div className="App">
      <Router>
        <div className='container'>

            <Routes>
              {/* project */}
                <Route path="/allProjects" element = {<ListProjectsComponent/>}></Route>
                <Route path="/createProject" element = {<CreateProjectComponent/>}></Route>
                <Route path='/yourProjects' element = {<YourProjectsComponent/>}></Route>

              {/* employee */}
              {/* <Route path="/login" element = {<EmployeeLoginComponent/>}></Route> */}
              <Route path="/login" element = {<LoginComponent/>}></Route>

              {/* main */}
              <Route path="/" element = {<MainComponent/>}></Route>
            </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <div className="row">
//         <div className="col">
//           <AppContent/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;