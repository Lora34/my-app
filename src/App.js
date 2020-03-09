import React, {useState, useEffect} from "react";
import axios from 'axios';
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import './App.css';

// const data = [{ id: 1, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...', year: '1982' }];
// const columns = [
//     {
//         name: 'Id', selector: 'id', sortable: true, cell: data.map(row => <td>{row.id}</td>),
//     }
//     // {
//     //     name: 'Title', selector: 'title', sortable: true,
//     // },
//     // {
//     //     name: 'Year', selector: 'year', sortable: true, right: true,
//     // },
// ];

// const handleChange = (state) => {
//     // You can use setState or dispatch with something like Redux so we can use the retrieved data
//     console.log('Selected Rows: ', state.selectedRows);
// };
// const mySweetTheme = {
//     rows: {
//         color: 'green'
//     }
// }

//использование hooks
const App = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [search, setSearch] = useState('');
    const [value, setValue] = useState('');




    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Search
    // const updateSearch = () => {
    //     setSearch({value});
    // };
    const myInput = event => {
        if (event.target.value !== '') {
            setValue(event.target.value);
        }
        else
            setSearch(event.target.value);
        console.log(search);

    };

    const submitForm = (e) => {
        e.preventDefault();
    };



    return (

        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>My app</h1>
            <form onSubmit={submitForm}>
                <input type="text"  onChange={event => setValue(event.target.value)}/>
                <input type="submit" onClick={myInput}/>
            </form>

            <Posts posts={currentPosts} loading={loading} search={search} className='table'/>
            <Pagination postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
            />
        </div>
    )

    //Передача параметров с помощью props
    // class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items: [],
    //         isLoaded: false,
    //         input: 'text',
    //         pageSize: 5,
    //         totalPages: 20,
    //         currentPage: 1
    //     }
    // }
// ?page=${this.props.currentPage}&count=${this.props.pageSize}
//     componentDidMount() {
//         fetch(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json,
//                 })
//             })
//     }
//     myInput = (e) => {
//         console.log(e.target.value);
//         this.setState({input: e.target.value })
//     }
//     render() {
//         let {isLoaded, items, pageSize, currentPage}  =this.state;
//         if (!isLoaded) {
//             return <div>Loading...</div>;
//         }
//         else {
//             return (
//                 <div className="App">
//                     <Table data={{isLoaded, items, pageSize, currentPage}}/>
//                     {/*<input onChange={this.myInput} />*/}
//                 </div>
//
//             )
//         }
//     }
//



};

export default App;
