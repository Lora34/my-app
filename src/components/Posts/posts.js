import React from "react";
import '../posts.css';
import 'bootstrap';
import ProfilePosts from './profilePosts'
// import postsApi from 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

// const Posts = ({posts, loading, sortBy, onSort}) => {
export default class extends React.Component {
    state = {
        loaded: false,
        posts:  null,
        selectedId: null
    };
    componentDidMount() {
        fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')

            .then(response => response.json())
            .then(result => this.setState({posts: result, loaded: true }))

    };
    setId(selectedId) {
        this.setState({selectedId});
    };

    render() {
        if (!this.state.loaded) {
            return <h2>Loading...</h2>
        }

        let postsList  = this.state.posts.map((post) => {
            let classes = ['list-group-item'];
            if(post.id === this.state.selected) {
                classes.push('text-success');
            }

            return (
                <tr key={post.id} onClick={() => this.setId(post.id)} className={classes.join(' ')}>
                    <td>{post.id}</td>
                    <td>{post.firstName}</td>
                    <td>{post.lastName}</td>
                    <td>{post.email}</td>
                    <td>{post.phone}</td>
                    <td>{post.address.streetAddress}</td>
                    <td>{post.address.city}</td>
                    <td>{post.address.state}</td>
                    <td>{post.address.zip}</td>
                    <td>{post.description}</td>
                </tr>
            )
        });

        let postsInfo = this.state.selectedId === null ?
            <div className="alert alert-warning">Please, selected post</div> :
            <ProfilePosts id={this.state.selectedId} posts={this.state.posts}/>

        return (
            <div >
                {postsInfo}
                <table className='table'>
                    <thead>
                    <tr>
                        <td className="cell">
                            {/*<button onClick={() => sortBy('id')}>id</button>*/}
                        </td>
                        <td className="cell">
                            {/*<button onClick={() => onSort('asc', 'lastName')}>Sort by asc</button>*/}
                            {/*<button onClick={() => onSort('desc', 'lastName')}>Sort by desc</button>*/}
                            firstName
                        </td>
                        <td className="cell"> lastName</td>
                        <td className="cell"> email</td>
                        <td className="cell"> phone</td>
                        <td className="cell"> streetAddress</td>
                        <td className="cell"> city</td>
                        <td className="cell">state</td>
                        <td className="cell"> zip</td>
                        <td className="cell"> description</td>
                    </tr>
                    </thead>
                    <tbody>
                    {postsList}
                    </tbody>
                </table>

            </div>
        )
    }
};
