import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';


class GalleryList extends Component {
    render() {
        return (
            <>
                <ul>
                    {/* Retrieving data from App.js to loop through */}
                    {this.props.galleryItemData.map((image) => {
                        return (
                            <>
                                
                                <GalleryItem 
                                // Passing Data to GalleryItem
                                key={image.id} 
                                itemData={image}
                                // Passing Likes Function to GalleryItem 
                                likes={this.props.button}
                                />
                            </>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default GalleryList;