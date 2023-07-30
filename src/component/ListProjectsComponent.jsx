import React, { Component } from 'react';
import { request, setAuthToken } from '../services/axioshelper';
import ProjectService from '../services/ProjectService';

class ListProjectsComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            projects: []
        }
    }
    
    componentDidMount() {
        ProjectService.getProjects().then((res) => {
            this.setState({ projects:res.data});
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
                        <h5 class="card-title">Wszystkie projekty</h5>

                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Nazwa projektu</th>
                                <th scope="col">Opis</th>
                                <th scope="col">Tagi</th>
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

export default ListProjectsComponent;