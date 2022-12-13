import React, { Component } from 'react';
import NewSingle from './NewSingle';
class news extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            news: [],
        }
    }

    componentDidMount(){
        const url = 'https://newsapi.org/v2/everything?q=India&from=2022-11-13&sortBy=publishedAt&apiKey=be4a118277814fc88894f1c8867db3f0';
        fetch(url)
            .then((response) => {
               return response.json();  
            })
            .then((data) => {
                this.setState({
                    news: data.articles,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    renderItems(){
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
     }
    render() {
        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        );
    }
}

export default news;