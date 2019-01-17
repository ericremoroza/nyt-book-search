import React, { Component } from "react";
import API from "../components/API/API";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Search away!"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      getBooks = () => {
        API.getBooks(this.state.q)
          .then(res =>
            this.setState({
              books: res.data
            })
          )
          .catch(() =>
            this.setState({
              books: [],
              message: "No results."
            })
          );
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
      };
    
      handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
    
        API.saveBook({
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail,
          link: book.volumeInfo.infoLink
        }).then(() => this.getBooks());
      };
    render() {
        return(
          <Wrapper>
            <Nav/>
          </Wrapper>

          );
    }
}

export default Home;