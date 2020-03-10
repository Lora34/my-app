import React from 'react';

export default class extends React.Component{
    state = {
        loaded: false,
        info: null,
        posts: null
    };



    componentDidMount() {
        fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
            .then(response => response.json())
            .then((result) => {this.setState({posts: result, loaded: true})})

    };





    // fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
    //     .then(r => r.json())
    //     .then(data => {
    //         this.setState({
    //             loaded: true,
    //             info: data
    //             }
    //         )
    //     })
    //  }

    // .then(response => response.json())
    // .then((response) => {
    //     this.setState({
    //         loaded: true,
    //         info: response
    //     })

    // componentDidUpdate() {
    //     let response =  fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
    //     let response1 = response.headers.get(this.props.id);
    //     // postsApi.get(this.props.id)
    //     response1.then((info) => {
    //         this.setState({
    //             loaded: true,
    //             info: info
    //         })
    //     })
    // }
    render() {
        if (!this.state.loaded) {
            return <h2>Loading...</h2>

        } else this.state.posts.map((post) => {
            if (post.id === this.props.id ) {
            return <table className='table'>
                <thead>
                <tr>
                    <td>id</td>
                    <td>firstName</td>
                    <td > lastName</td>
                    <td > email</td>
                    <td> phone</td>
                    <td> streetAddress</td>
                    <td> city</td>
                    <td>state</td>
                    <td> zip</td>
                    <td> description</td>
                </tr>
                </thead>
                <tbody>
                <tr key={this.state.posts.id}>
                    <td>{this.state.posts.id}</td>
                    <td>{this.state.posts.firstName}</td>
                    <td>{this.state.posts.lastName}</td>
                    <td>{this.state.posts.email}</td>
                    <td>{this.state.posts.phone}</td>
                    <td>{this.state.posts.streetAddress}</td>
                    <td>{this.state.posts.city}</td>
                    <td>{this.state.posts.state}</td>
                    <td>{this.state.posts.zip}</td>
                    <td>{this.state.posts.description}</td>
                </tr>
                </tbody>
            </table>
        } else return (
                <table>
            <thead>
            <tr>
                <td>id</td>
                <td>firstName</td>
                <td > lastName</td>
                <td > email</td>
                <td> phone</td>
                <td> streetAddress</td>
                <td> city</td>
                <td>state</td>
                <td> zip</td>
                <td> description</td>
            </tr>
            </thead>
                    <tbody></tbody>
                </table>
            )

    })
    }
}
