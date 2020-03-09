import React from "react";
// import styles from './myTable.css';
// import DataTable from "react-data-table-component";
/*
const columns = [
            {name: 'id', sortable: true, selector: 'id',  maxWidth:'10px'},
            {name: 'firstName', sortable: true, selector: 'firstName',maxWidth:'10px'},
            {name: 'lastName', sortable: true, selector: 'lastName', maxWidth:'10px'},
            {name: 'email', sortable: true, selector: 'email', maxWidth:'10px'},
            {name: 'phone', sortable: true, selector: 'phone', maxWidth:'10px'},
            {name: 'streetAddress', sortable: true, selector: 'address.streetAddress',maxWidth:'15px'},
            {name: 'city', sortable: true, selector: 'address.city', center: true, maxWidth:'10px'},
            {name: 'state', sortable: true, selector: 'address.state', maxWidth:'10px'},
            {name: 'zip', sortable: true, selector: 'address.zip', maxWidth:'10px'},
            {name: 'description', sortable: true, selector: 'description', maxWidth:'10px'}
    ]
const mySweetTheme = {
    rows: {
        height: '15px',
        width: '10px'
    }
}

 */

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            search: '',
            currentPage: 1,
            totalPages: 20,
            pageSize: 5

        };
    }
    updateSearch() {
        this.setState({search: this.state.value});
    }
    myInput = (e) => {
        if (e.target.value !== '') {
            this.setState({value: e.target.value})
        }
        else
            this.setState({search: e.target.value})

    }

    submitForm = (e) => {
        e.preventDefault();
    }


    curPage = (p) => {
        this.setState({currentPage: p});
    }

    render() {
        let pageCount = Math.ceil(this.state.totalPages  / this.state.pageSize);

        let pages = [];
        for (let i=1; i <= pageCount; i++) {
            pages.push(i);
        }

        let data = this.props.data.items.filter(
            (item) => {
                return item.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return(
            /*
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                customTheme={mySweetTheme}
                fixedHeader
                pagination
                highlightOnHover = {true}
                pointerOnHover = {true}
                responsive = {false}
            />
             */
            <div className="myTable">
                <form onSubmit={this.submitForm}>
                    <input type="text"  onChange={this.myInput}/>
                    <input type="submit" onClick={this.updateSearch.bind(this)}/>
                </form>

                <div>
                    {/*className={this.props.currentPage === p && styles.selected}*/}
                {pages.map(p => {
                    return <span  onClick={()=>{this.curPage(p);}}>{p}</span>
                })}
                </div>
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
                    {data.map(item => (
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
            </div>
        )
    }
}

export default Table;