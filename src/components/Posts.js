import React from "react";
import './posts.css';

const Posts = ({posts, loading, search}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    const data = posts.filter(
        (item) => {
            return item.firstName.toLowerCase().indexOf(search) !== -1;
        }
    );

    return (
        <div >
        <table className='table'>
            <thead>
            <tr>
                <td className="cell"> id</td>
                <td className="cell"> firstName</td>
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
            {data.map(item => (
                <tr>
                    <td className='cell' key={item.id}>{item.id}</td>
                    <td className='cell' >{item.firstName}</td>
                    <td className='cell' >{item.lastName}</td>
                    <td >{item.email}</td>
                    <td >{item.phone}</td>
                    <td >{item.address.streetAddress}</td>
                    <td >{item.address.city}</td>
                    <td >{item.address.state}</td>
                    <td >{item.address.zip}</td>
                    <td >{item.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
};

export default Posts;