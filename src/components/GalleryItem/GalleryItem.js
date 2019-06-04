import React, {Component} from 'react';


class GalleryItem extends Component {

    state = {
        isClicked: false,
        likes: 0
        
    }

    

    // Function to handle when a photo or description is clicked
    handleClick = () => {
        this.setState({
            ...this.state,
            isClicked: !this.state.isClicked
        })
    }
    
    // Function to handle with the like button is clicked
    // This Function was not needed
    // handleLike = () => {
    //     this.setState({
    //         ...this.state,
    //         likes: this.state.likes += 1
            
    //     })
    //     console.log('Likes:', this.state.likes);
        
    // }

    render() {
        console.log(this.state);

        
        let listItemToShow;
        // Shortcut for itemData
        let imageData =  this.props.itemData;

        // Toggle Image & Description on Click
        if(this.state.isClicked) {
            listItemToShow = (<><li>
                <span onClick={this.handleClick} className="text_item">{imageData.description}</span>
                <br />
                <span className="like_counter">{imageData.likes} People Like This</span>
                <br /> <button onClick={() => this.props.likes(imageData.id)} >Like</button>
                </li> </>)
        } else {
            listItemToShow = (<><li>
                <span onClick={this.handleClick} ><img src={imageData.path} width="125" alt={imageData.description} /></span>
                <br />
                <span className="like_counter">{imageData.likes} People Like This</span>
                <br /> 
                <button onClick={() => this.props.likes(imageData.id)}>Like</button>
                </li> </>)
        }

        return(
            listItemToShow
            
        )
    }
}

export default GalleryItem;