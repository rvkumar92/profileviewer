import React, {Component} from 'react';

class Profile extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}}/>
                </div>

                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                            <span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
                            <span className="label label-info">{this.props.userData.followers} Followers</span>
                            <span className="label label-danger">{this.props.userData.following} Following</span>
                        </div>
                    </div>
                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item glyphicon glyphicon-user"><strong> : {this.props.userData.login}</strong></li>
                        <li className="list-group-item glyphicon glyphicon-map-marker"><strong> : {this.props.userData.location}</strong></li>
                        <li className="list-group-item glyphicon glyphicon-envelope"><strong> : {this.props.userData.email}</strong></li>
                    </ul>
                    <hr />
                    <a href={this.props.userData.html_url} className="btn btn-primary">Visit Profile</a>
                </div>
            </div>
        )
    }
}
export default Profile;