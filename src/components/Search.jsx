import React, {useState, useEffect} from "react";

const Search = (props) => {
    const[value, setValue] = useState('');

    useEffect(() => {
        value === '' && props.setSearch(false)
    }, [props, value]);

    let handleChange = (e) => {
        setValue(e.target.value);
        props.onChangeValue(e.target.value);
    };

    return (
        <div>
            <input
                onChange={handleChange}
                value={value}
                type="text"
                placeholder="i am looking for..."
            />
        </div>
    )
}

export default Search;