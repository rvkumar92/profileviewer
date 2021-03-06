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
            perPage: 10
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
    getUserRepos(){
        $.ajax({
            //url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            url: 'https://api.github.com/users/'+this.state.username+'/repos?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data){
                console.log(data);
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr, status, error){
                this.setState({username: null});
                alert(error).bind(this);
            }
        });
    }
    componentWillMount(){
        this.getUserData();
        this.getUserRepos();
    }
    handleSubmit(username){
        this.setState({username: username},function(){
            this.getUserData();
            this.getUserRepos();
        });

    }
    render(){
        return(
            <div>
                <Search handleForm={this.handleSubmit.bind(this)}/>
                <Profile {...this.state}/>
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