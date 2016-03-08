import React, {Component} from 'react';

class Search extends Component{
    handleSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username || username == ''){
            alert('PLease enter a username');
            return;
        }
        this.props.handleForm(username);
        this.refs.username.value = '';
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Search github users</label>
                    <br/>
                    <input type="text" placeholder="Enter github username..." className="form-control" ref="username"/>
                </form>
            </div>
        )
    }
}

export default Search;