import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook , buyBook } from '../../redux/book/bookAction'

class Book extends Component {
  render() {
    return (
      <div >
        <h2>Number of Books - {this.props.numOfBooks}</h2>
        <div>
          <button onClick={() => {this.props.addBook()}}>Add Book</button>
          <button onClick={() => {this.props.buyBook()}}>Buy Book</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    numOfBooks:state.book.numOfBooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook : () => dispatch(addBook()),
    buyBook : () => dispatch(buyBook())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Book);