import React, {Component} from 'react';
import './CatListPage.css';
import CatCard from '../../components/CatCard/CatCard';
import * as catAPI from '../../services/cats-api'


class CatListPage extends Component {
    state = {
        cats: []
    }

    async componentDidMount() {
        const cats = await catAPI.getAll();
        this.setState({cats});
    }

    handleDeleteCat = async (id, idx) => {
        await catAPI.deleteOne(idx);
        this.setState(state => ({
            cats: state.cats.filter(c => c._id !== id)
        }), () => this.props.history.push('/cats'));
    }

    render() {
        return (
            <>
                <h1>Cat List</h1>
                <div className='CatListPage-grid'>
                    {this.state.cats.map((cat, idx) =>
                        <CatCard
                            key={cat._id}
                            idx={idx}
                            cat={cat}
                            user={this.props.user}
                            handleDeleteCat={this.handleDeleteCat}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default CatListPage;