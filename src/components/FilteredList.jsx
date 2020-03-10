import React, {useState} from "react";
import './posts.css';

export default props => {
    return (
        <div>
            <h3>
                Search default: <span>{props.filteredItems.length}</span>
            </h3>
            {props.filteredItems.map((item, index) => (
                <FilterItem key={index} item={item} />
            ))}
        </div>
    );
};

const FilterItem = props => {
    return (
        <div className='table'>
            <tr>
                <td className='cell' key={props.item.id}>{props.item.id}</td>
                <td className='cell' >{props.item.firstName}</td>
                <td className='cell' >{props.item.lastName}</td>
                <td >{props.item.email}</td>
                <td >{props.item.phone}</td>
                <td >{props.item.address.streetAddress}</td>
                <td >{props.item.address.city}</td>
                <td >{props.item.address.state}</td>
                <td >{props.item.address.zip}</td>
                <td >{props.item.description}</td>
            </tr>
        </div>

    );
}