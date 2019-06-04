import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';



class App extends Component {

  state = {
    galleryList: []
    

  }

  componentDidMount() {
    this.getPhotos();
  }

  // PUT request to the server when a 'like' button is clicked
  addLike = (id) => {
    Axios.put(`/gallery/like/${id}`)

    .then( (response) => {
      console.log('back from PUT',response.data);
      this.getPhotos();
    })
    .catch(err => {
      console.log(err);
    })
    
  }


  // GET Request
  getPhotos = () => {
    console.log('in GET')


    Axios.get('/gallery')

      .then(response => {
        console.log(response.data);
        this.setState({
          galleryList: response.data
        })

      })
      .catch(err => {
        console.log(err);
      })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my Life</h1>
          <h2 className="App-subtitle">Pete St. Martin</h2>
        </header>
        <br />

        <GalleryList 
        // Pass state.galleryList to galleryItemData
        galleryItemData={this.state.galleryList} 
        // Pass Function
        button={this.addLike}
        />

      </div> // end div className="App"
    );
  }
}

export default App;
