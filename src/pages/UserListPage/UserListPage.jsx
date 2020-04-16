import React, { Component } from 'react';
import './UserListPage.css';
import * as userAPI from '../../services/users-api';
import UserCard from '../../components/UserCard/UserCard';


class UserListPage extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const users = await userAPI.getAll();
        this.setState({users: users})
    }

    render() {
        return (
            <>
                <h1>User List</h1>
                <div className='UserListPage-grid'>
                    {this.state.users.map((user) =>
                    <UserCard 
                        key={user._id}
                        user={user}
                    />
                    )}
                </div>
            </>

        )
    }
}

export default UserListPage;