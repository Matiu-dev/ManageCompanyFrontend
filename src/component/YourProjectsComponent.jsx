import React, { Component } from 'react';
import ProjectService from '../services/ProjectService';
import {request} from '../services/axioshelper';


class YourProjectsComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            projects: []
        }
    }
    
    componentDidMount() {
        // ProjectService.getYourProjects().then((res) => {
        //     this.setState({ projects:res.data});
        // });

        request(
            "GET",
            "/yourProjects",
            {}
        ).then((response) => {
            this.setState({projects : response.data})
        });
    }

    render() {
        return (
            <div>
<section class="section">
        <div class="row">
            <div class="col">

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Moje projekty</h5>

                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Nazwa projektu</th>
                                <th scope="col">Opis</th>
                                <th scope="col">Tagi</th>
                                <th scope='col'>Link</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.projects.map(
                                    project => 
                                    <tr key = {project.id}>
                                        <td>{project.projectTitle}</td>
                                        <td>{project.description}</td>
                                        <td>{project.tags}</td>
                                        <td>
                                            <a href="">Link</a>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
        );
    }
}

export default YourProjectsComponent;