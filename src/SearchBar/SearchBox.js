import React, { Component } from 'react'
import './SearchBox.css'

export default class SearchBox extends Component {
    render() {
        return (
            <form onSubmit={e => this.props.handleSubmit(e)}>
                <div className='search__input'>
                    <label htmlFor='book-search'>Search For Books</label>
                    <input name='searchQuery' type='text' value={this.props.state.searchQuery}  
                    onChange={e => this.props.handleChange(e)} placeholder='The Hunger Games'></input>
                    <input type='submit' value='Find' />
                </div>
                <div className='filters__container'>
                    <div className='search-type__container'>
                        <label>Format:</label>
                        <select id = "myList" value={this.props.state.format} onChange={e => this.props.handleFormatChange(e)}>
                            <option value = "">All</option>
                            <option value = "ebooks">Digital</option>
                            <option value = "full">PaperBack</option>
                        </select>
                    </div>
                </div>
            </form>
        )
    }
}