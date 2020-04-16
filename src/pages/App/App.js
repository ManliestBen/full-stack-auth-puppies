import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import * as puppyAPI from '../../services/puppies-api';
import PuppyListPage from '../../pages/PuppyListPage/PuppyListPage';
import AddPuppyPage from '../../pages/AddPuppyPage/AddPuppyPage';
import EditPuppyPage from '../../pages/EditPuppyPage/EditPuppyPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import NavBar from '../../components/NavBar/NavBar';
import CatListPage from '../CatListPage/CatListPage';
import AddCatPage from '../AddCatPage/AddCatPage';
import * as catAPI from '../../services/cats-api';
import EditCatPage from '../EditCatPage/EditCatPage';

class App extends Component {
  state = {
    puppies: [],
    cats: [],
    user: userService.getUser()
  };

  handleAddPuppy = async newPupData => {
    const newPup = await puppyAPI.create(newPupData);
    this.setState(state => ({
      puppies: [...state.puppies, newPup]
    }), () => this.props.history.push('/'));
  }

  handleAddCat = async newCatData => {
    const newCat = await catAPI.create(newCatData);
    this.setState(state => ({
      cats: [...state.cats, newCat]
    }), () => this.props.history.push('/cats'));
  }

  handleUpdateCat = async (updatedCatData, idx, id) => {
    const updatedCat = await catAPI.update(updatedCatData, idx);
    const newCatsArray = this.state.cats.map(c =>
        c._id === id ? updatedCat : c
      );
      this.setState(
        {cats: newCatsArray},
        () => this.props.history.push('/cats')
      );
  }

  handleDeletePuppy= async id => {
    await puppyAPI.deleteOne(id);
    this.setState(state => ({
      puppies: state.puppies.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleUpdatePuppy = async updatedPupData => {
    const updatedPuppy = await puppyAPI.update(updatedPupData);
    const newPuppiesArray = this.state.puppies.map(p => 
      p._id === updatedPuppy._id ? updatedPuppy : p
    );
    this.setState(
      {puppies: newPuppiesArray},
      () => this.props.history.push('/')
    );
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  async componentDidMount() {
    const puppies = await puppyAPI.getAll();
    this.setState({puppies});
    const cats = await catAPI.getAll();
    this.setState({cats});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          CRUDdy Pets
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <main>
          {this.state.user ? 
          <Route exact path='/' render={({history}) => 
            <PuppyListPage
              puppies={this.state.puppies}
              handleDeletePuppy={this.handleDeletePuppy}
              user={this.state.user}
            />
          } />
          :
          <></>
          }
          <Route exact path='/cats' render={({history, location}) => 
            <CatListPage
            cats={this.state.cats}
            user={this.state.user}
            history={history}
            location={location}
            />
          } />
          <Route exact path='/add' render={() => 
            <AddPuppyPage
              handleAddPuppy = {this.handleAddPuppy}
            />
          } />
          <Route exact path='/addcat' render={() => 
            <AddCatPage
              handleAddCat = {this.handleAddCat}
            />
          } />
          <Route exact path='/edit' render={({history, location}) => 
            <EditPuppyPage
              handleUpdatePuppy={this.handleUpdatePuppy}
              location={location}
            />
          } />
          <Route exact path='/editcat' render={({history, location}) => 
            <EditCatPage
              handleUpdateCat={this.handleUpdateCat}
              location={location}
            />
          } />
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
          }/>
        </main>
      </div>
    )
  }
}

export default App;
