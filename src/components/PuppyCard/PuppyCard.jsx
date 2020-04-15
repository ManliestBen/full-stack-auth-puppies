import React from 'react';
import {Link} from 'react-router-dom';
import userService from '../../services/userService';

function PuppyCard({puppy, handleDeletePuppy, user}) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{puppy.name}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Breed</dt>
                    <dd>{puppy.breed}</dd>
                    <dt>Age</dt>
                    <dd>{puppy.age}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                {puppy.owner === user._id ?
                    <Link
                        className='btn btn-xs btn-warning'
                        to={{
                                pathname: '/edit',
                                state: {puppy}
                        }}
                    >
                    EDIT
                    </Link>
                    :
                    <></>
                }
                {puppy.owner === user._id ?
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeletePuppy(puppy._id)}
                >
                    DELETE
                </button>
                :
                <></>
                }
            </div>
        </div>
    )
}

export default PuppyCard;