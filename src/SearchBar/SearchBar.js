import React, { Component } from 'react'
import SearchBox from './SearchBox'
import './SearchBar.css'

export default class SearchBar extends Component {

    render() {
        return (
            <div className='search__container'>
                <div className='searchItems__container'>
                    <SearchBox 
                    handleSubmit={e => this.props.handleSubmit(e)} state={this.props.state} 
                    handleChange={e => this.props.handleChange(e)}
                    handleFormatChange={e => this.props.handleFormatChange(e)}
                    handleTypeChange={e => this.props.handleTypeChange(e)}/>
                </div>
            </div>
        )
    }
}