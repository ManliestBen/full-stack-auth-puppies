import React from 'react';
import {Link} from 'react-router-dom';

function UserCard({user}) {
    return (
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h3 className='panel-title'>{user.name}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>User Name</dt>
                    <dd>{user.name}</dd>
                    &nbsp;
                    <dt>User Email</dt>
                    <dd>{user.email}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                        pathname: '/viewuser',
                        state: {user}
                    }}
                >
                VIEW
                </Link>
            </div>
        </div>
    )
}

export default UserCard;