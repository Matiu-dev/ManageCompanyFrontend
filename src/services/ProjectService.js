import axios from "axios";
import {request} from './axioshelper';

const ALL_PROJECTS_URL = "http://localhost:8080/allProjects";
const YOUR_PROJECTS_URL = "/yourProjects";
axios.defaults.baseURL = 'http://localhost:8080';
const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
};

class ProjectService {

    getProjects() {
        return axios.get(ALL_PROJECTS_URL);
    }

    getYourProjects() {
        
        request(
            "GET",
            "/messages",
            {}
        ).then((response) => {
            this.setState({data : response.data})
        });
        
    }
}

export default new ProjectService()