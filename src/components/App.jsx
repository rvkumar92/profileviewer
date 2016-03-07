import React, {Component} from 'react';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'rvkumar92',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                console.log(data);
                this.setState({userData: data});
            }.bind(this),
            error: function(xhr, status, error){
                this.setState({username: null});
                alert(error).bind(this);
            }
        });
    }
    componentWillMount(){
        this.getUserData();
    }
    handleSubmit(username){
        this.setState({username: username},function(){
            this.getUserData();
        });

    }
    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.userData.name}</h3>
                </div>
                <div className="panel-body">
                    <Search handleForm={this.handleSubmit.bind(this )}/>
                    <Profile {...this.state}/>
                </div>
            </div>
        );
    }
}
App.propsTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};
App.defaultProps = {
    clientId: '33861dcfe25145fcb3d0',
    clientSecret:  'afe58fa6f82ca834f2bbdb6d4367a22301a0cc19'
};
export default App;