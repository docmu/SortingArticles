import React, { Component, useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

// export default class App extends Component {
//     //state of the button clicked
//     constructor(props) {
//         super(props);
//         this.state = {
//             sortByUpvote: false,
//             sortByRecent: false,
//         };
//     };
//     componentDidMount() {
//         //sorted by most upvoted by default
//         this.mostUpvotedClick();
//     }
//     mostUpvotedClick() {
//         this.setState({ sortByUpvote: !this.state.sortByUpvote });
//         //sort by upvotes in descending order
//         this.props.articles.sort((a, b) => b.upvotes - a.upvotes);
//     }
//     mostRecentClick = () => {
//         this.setState({ sortByRecent: !this.state.sortByRecent });
//         //sort by date in descending order
//         this.props.articles.sort((a, b) => new Date(b.date) - new Date(a.date));
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h8k-navbar header={title}></h8k-navbar>
//                 <div className="layout-row align-items-center justify-content-center my-20 navigation">
//                     <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
//                     <button onClick={() => this.mostUpvotedClick()} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
//                     <button onClick={this.mostRecentClick} data-testid="most-recent-link" className="small">Most Recent</button>
//                 </div>
//                 <Articles articles={this.props.articles} />
//             </div>
//         );
//     }
// }

export default function App({ articles }) {
    const [buttonClicked, setButtonClicked] = useState(-1);
    const mostUpvotedClick = () => {
        console.log('most upvoted');
        //0 represents Most Upvoted button
        setButtonClicked(0);
        //sort by upvotes in descending order
        articles.sort((a, b) => b.upvotes - a.upvotes);
    }
    const mostRecentClick = () => {
        console.log('most recent');
        //1 represents Most Recent button
        setButtonClicked(1);
        //sort by date in descending order
        articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        //-1 represents the page on the first render
        if (buttonClicked === -1) {
            //list needs to be sorted by most upvoted by default
            mostUpvotedClick();
        }
    });
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={() => mostUpvotedClick()} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={() => mostRecentClick()} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={articles} />
        </div>
    );
}


