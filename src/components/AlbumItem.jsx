import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import '../css/album_item.css';

class AlbumItem extends Component {
  constructor(props){
      super(props);
      this.state = {
          btn_liked: 'Like',
      };
      this.liked = this.liked.bind(this);
  }   

  liked(){
        if (this.state.btn_liked === 'Like') {
            document.getElementById(this.props.data.name).style.backgroundColor = "#c5faf6";
            this.setState({btn_liked: 'Dislike'});
        }
        else {
            document.getElementById(this.props.data.name).style.backgroundColor = "#ffffff";
            this.setState({btn_liked: 'Like'})
        }
  }

  render() {
    return (
        <div className='album_item'>
            <Card id={this.props.data.name}>
                <Card.Img variant="top" src={this.props.data.img} />
                <Card.Body>
                    <Card.Title>"{this.props.data.name}"</Card.Title>  
                    <div className='card_items'>
                        <div><span className='label'>Artist:</span> &nbsp; {this.props.data.artist}</div>
                        <div><span className='label'>Genre:</span> &nbsp; {this.props.data.genre}</div>
                        <div><span className='label'>Country:</span> &nbsp; {this.props.data.country}</div>
                        <div><span className='label'>CD Price (USD):</span> &nbsp; {this.props.data.price}</div>
                        <Button className='btn_like' onClick={this.liked}>{this.state.btn_liked}</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
  }
}

export default AlbumItem;