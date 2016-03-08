import React, {Component} from 'react';
import Repo from './Repo.jsx';
class RepoList extends Component{
    render(){
        return(
            <div>
                <h3>User Repositories</h3>
                <ul className="list-group">
                    {
                        this.props.userRepos.map(repos => {
                            return <Repo repo={repos}
                                        key={repos.id}
                                {...this.props}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default RepoList;