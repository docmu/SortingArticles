import React, { Component } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";
class App extends Component {
    //the articles array passed through props sorted by highest upvotes by default
    articles = this.props.articles.sort((a, b) => b.upvotes - a.upvotes);
    //state of the button clicked
    state = {
        sortByUpvote: false,
        sortByRecent: false,
    };
    mostUpvotedClick = () => {
        this.setState({ sortByUpvote: !this.state.sortByUpvote });
        //sort by upvotes in descending order
        this.articles.sort((a, b) => b.upvotes - a.upvotes);
    }
    mostRecentClick = () => {
        this.setState({ sortByRecent: !this.state.sortByRecent });
        //sort by date in descending order
        this.articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    render() {
        return (
            <div className="App">
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row align-items-center justify-content-center my-20 navigation">
                    <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                    <button onClick={this.mostUpvotedClick} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                    <button onClick={this.mostRecentClick} data-testid="most-recent-link" className="small">Most Recent</button>
                </div>
                {/* for every article in the articles array, render an <Articles /> component */}
                {this.articles.map(article => <Articles key={article.title} title={article.title} upvotes={article.upvotes} date={article.date} />)}
            </div>
        );
    }
}

// function App({ articles }) {
//     return (
//         <div className="App">
//             <h8k-navbar header={title}></h8k-navbar>
//             <div className="layout-row align-items-center justify-content-center my-20 navigation">
//                 <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
//                 <button data-testid="most-upvoted-link" className="small">Most Upvoted</button>
//                 <button data-testid="most-recent-link" className="small">Most Recent</button>
//             </div>
//             <Articles articles={articles} />
//         </div>
//     );
// }

export default App;
