import React from "react";

const Posts = ({posts, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }


    return (
        <table>
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
            {posts.map(item => (
                <tr>
                    <td key={item.id}>{item.id}</td>
                    <td >{item.firstName}</td>
                    <td >{item.lastName}</td>
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
    )
};

export default Posts;