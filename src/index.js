import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/*

import React, { Component } from 'react';
import axios from 'axios';
import {Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button} from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      newBookData: {
        title: '',
        rating: ''
      },
      editBookData: {
        id:'',
        title: '',
        rating: ''
      },
      newBookModal: false,
      editBookModal: false
    }

    this.toggleNewBookModel = this.toggleNewBookModel.bind(this);
    this.toggleEditBookModel = this.toggleEditBookModel.bind(this);
    this.addBook = this.addBook.bind(this);
    //this.editBook = this.editBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }

  componentDidMount() {
    this._refreshBooks();
  }

  toggleNewBookModel() {
    this.setState({
      newBookModal: this.state.newBookModal ? false:true
    });
    console.log(this.state.newBookModal);
  }

  toggleEditBookModel() {
    console.log(this.state.editBookModal);
    this.setState({
      editBookModal: this.state.editBookModal ? false:true
    });
    console.log(this.state.editBookModal);
  }

  addBook() {
    console.log(this.state);
    axios.post('http://localhost:3001/books',this.state.newBookData).then(response => {
      let {books} = this.state;
      books.push(response.data);
      console.log("response ...",response)
      this.setState({books, newBookModal: false, newBookData:{title: '', rating: ''}});
    });
    console.log("send the book");
  }

  editBook(id, title, rating) {
    this.setState({
      editBookData: {
        id, title, rating
      },
      editBookModal: !this.state.editBookModal
    });
  }

  updateBook(){
    let {title, rating} = this.state.editBookData;
    axios.put('http://localhost:3001/books/' + this.state.editBookData.id, {title,rating})
    .then((response) => {
      this._refreshBooks();
      this.setState({
        editBookModal: false, editBookData: {id:'',title:'', rating:''}
      });
    });
  }

  _refreshBooks() {
    axios.get('http://localhost:3001/books').then((res) => {
      console.log(res.data);
      this.setState({
        books: res.data
      });
    });
  }

  deleteBook(id) {
    axios.delete('http://localhost:3001/books/' + id)
    .then((response) => {
      this._refreshBooks();
    });
  }

  render() {
    //console.log(this.state.books);
    const books = this.state.books.map((book, index) => {
      return (
            <tr key={index}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.rating}</td>
              <td>
              <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this,book.id, book.title,book.rating)}>Edit</Button>
              <Button color="danger" size="sm" onClick={this.deleteBook.bind(this,book.id)}>Delete</Button>
              </td>
            </tr>
      );
    });
    return (
      <div className="App">

        <h1>Books App</h1>
        <div>
        <Button color="primary" onClick={this.toggleNewBookModel}>Add Book</Button>
        <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModel} className={this.props.className}>
          <ModalHeader toggle={this.toggleNewBookModel}>Add new Book</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title" >Title</Label>
              <Input id="title" onChange={(e) => {
                let { newBookData } = this.state;

                newBookData.title = e.target.value;

                this.setState({
                  newBookData
                });
                console.log(this.state.newBookData);
              }}/>
            </FormGroup>
            <FormGroup>
              <Label for="rating" >Rating</Label>
              <Input id="rating" onChange={(e) => {
                let { newBookData } = this.state;

                newBookData.rating = e.target.value;

                console.log("changing");
 
                this.setState({
                  newBookData
                });
                console.log(this.state.newBookData);
              }}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addBook}>Save Book</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewBookModel}>Cancel</Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModel} className={this.props.className}>
          <ModalHeader toggle={this.toggleEditBookModel}>Edit Book</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title" >Title</Label>
              <Input id="title" onChange={(e) => {
                let { editBookData } = this.state;

                editBookData.title = e.target.value;

                this.setState({
                  editBookData
                });
                console.log(this.state.editBookData);
              }} value={this.state.editBookData.title}/>
            </FormGroup>
            <FormGroup>
              <Label for="rating" >Rating</Label>
              <Input id="rating" onChange={(e) => {
                let { editBookData } = this.state;

                editBookData.rating = e.target.value;

                console.log("changing");
 
                this.setState({
                  editBookData
                });
                console.log(this.state.editBookData);
              }} value={this.state.editBookData.rating}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateBook}>Update Book</Button>{' '}
            <Button color="secondary" onClick={this.toggleEditBookModel}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>


        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {books}

          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;


*/ 