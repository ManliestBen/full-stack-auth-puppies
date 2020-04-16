import React from 'react';
import {Link} from 'react-router-dom';
import userService from '../../services/userService';

function CatCard({cat, handleDeleteCat, user, idx}) {
    return (
        
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{cat.name}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Breed</dt>
                    <dd>{cat.breed}</dd>
                    <dt>Age</dt>
                    <dd>{cat.age}</dd>
                    <dt>Owner</dt>
                    <dd>{cat.owner}</dd>
                    
                </dl>
            </div>
            <div className='panel-footer'>
                {cat.owner === user.name  ?
                    <Link
                        className='btn btn-xs btn-warning'
                        to={{
                                pathname: '/editcat',
                                state: {cat},
                                idx: idx
                        }}
                    >
                    EDIT
                    </Link>
                    :
                    <></>
                }
                {cat.owner === user.name ?
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteCat(cat._id, idx)}
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

export default CatCard;