import React, { Component } from "react";
import { Dropdown, Row, Col } from 'react-bootstrap';
import '../css/filtered_list.css';
import AlbumItem from './AlbumItem';
import SelectList from './SelectList';

const genres = [
    "All Genres",
    "Alternative Rock",
    "Hip Hop",
    "Pop",
    "Pop Rock",
    "R&B"
]

const countries = [
    "All Countries",
    "Canada",
    "United Kingdom",
    "United States"
]

class FilteredList extends Component {
    constructor(props){
        super(props);
        this.state = {
            genre_selection: 'All Genres',
            country_selection: 'All Countries',
            price_selection: 'None',
            selected_albums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        };
        this.filter_sort = this.filter_sort.bind(this);
        this.filter_items = this.filter_items.bind(this);
        this.sort_items = this.sort_items.bind(this);
        this.genre_select = this.genre_select.bind(this);
        this.country_select = this.country_select.bind(this);
        this.price_select = this.price_select.bind(this);
    }

    genre_select(val){
        var filtered_sorted = this.filter_sort(val, this.state.country_selection, this.state.price_selection);
        this.setState({genre_selection: val, selected_albums: filtered_sorted});
    }

    country_select(val){
        var filtered_sorted = this.filter_sort(this.state.genre_selection, val, this.state.price_selection);
        document.getElementById(this.state.country_selection).style.backgroundColor = 'transparent';
        document.getElementById(val).style.backgroundColor = 'white';
        this.setState({country_selection: val, selected_albums: filtered_sorted});
    }

    price_select(val){
        var filtered_sorted = this.filter_sort(this.state.genre_selection, this.state.country_selection, val);
        this.setState({price_selection: val, selected_albums: filtered_sorted});
    }

    filter_sort(genre, country, price){
        var filtered = this.filter_items(genre, country);
        var sorted = this.sort_items(price, filtered)
        return sorted;
    }

    filter_items(genre, country){
        var filtered = [];
        var album_list = this.props.album_list;
        for (var i = 0; i < album_list.length; i++){
            if ((album_list[i].genre === genre || genre ==='All Genres') && 
                (album_list[i].country === country || country === 'All Countries')){
                filtered.push(album_list[i].id);
            }
        }
        return filtered;
    }

    sort_items(price, filtered){
        var album_list = this.props.album_list;
        if (price === 'None'){
            filtered.sort(function (a, b) {
                return album_list[a].id - album_list[b].id;
            });
            return filtered;
        }
        else if (price === 'Low to High'){
            filtered.sort(function (a, b) {
                return album_list[a].price - album_list[b].price;
            });
            return filtered;
        }
        else if (price === 'High to Low'){
            filtered.sort(function (a, b) {
                return album_list[b].price - album_list[a].price;
            });
            return filtered;
        }
    }

    render() {
        const album_items = []
        for (const [index, value] of this.state.selected_albums.entries()) {
            album_items.push(
            <Col xs={12} md={6} lg={4} key={index}>
                <AlbumItem data={this.props.album_list[value]}/>
            </Col>
            )
        }

        return (
          <div className='filtered_list'>
            <Row>
            <Col xs={12} sm={3} xl={2} id='side_bar'>
                <Row className='dropdown_item'>
                    <Col>
                        <h6>Genre</h6>
                    </Col>
                    <SelectList items={genres} click_handler={(val)=>{this.genre_select(val)}}/>
                </Row>

                <Row className='dropdown_item'>
                    <Col>
                        <h6>Country</h6>
                    </Col>
                    <SelectList items={countries} click_handler={(val)=>{this.country_select(val)}}/>
                </Row>

                <Row className='dropdown_item'>
                    <Col>
                        <h6>Sort by Price</h6>
                    </Col>
                    <Col>
                        <Dropdown onSelect={this.price_select}>
                            <Dropdown.Toggle>
                                { this.state.price_selection }
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item eventKey='None'>None</Dropdown.Item>
                                <Dropdown.Item eventKey='Low to High'>Low to High</Dropdown.Item>
                                <Dropdown.Item eventKey='High to Low'>High to Low</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} sm={9} xl={10}>
                <Row className='cards_row'>
                    {album_items}
                </Row>
            </Col>
            </Row>
          </div>
      );
    }
  }
  
  export default FilteredList;