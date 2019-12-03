import React, { Component } from "react";
import { Col, Dropdown } from 'react-bootstrap';

class SelectList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: this.props.items[0],
        };
        this.clicked = this.clicked.bind(this)
    }   
    
    clicked(val){
        document.getElementById(this.state.selected).style.backgroundColor = 'transparent';
        document.getElementById(val).style.backgroundColor = 'white';
        this.props.click_handler(val);
        this.setState({selected: val})
    }

    render() {
        const list_items = [];
        const dropdown_items = []
        for (const [index, value] of this.props.items.entries()) {
            list_items.push(
                <div key={index} id={value} onClick={(e)=>{this.clicked(e.target.id)}}>{value}</div>
            )
        }
        for (const [index, value] of this.props.items.entries()) {
            dropdown_items.push(
                <Dropdown.Item key={index} eventKey={value}>{value}</Dropdown.Item>
            )
        }
        return (
            <div>
            <Col className='filter_items'>
                { list_items }
            </Col>
            <Col className='dropdown_col'>
                <Dropdown onSelect={this.clicked}>
                    <Dropdown.Toggle>
                        { this.state.selected }
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        { dropdown_items }
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            </div>
        );
    }
  }
  
  export default SelectList;