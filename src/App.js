import React, {useState, useEffect} from "react";
import Table from './components/Table';
import axios from 'axios';
import Posts from "./components/Posts";

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
    const [postPerPage, setPostPerPage] = useState(5);


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
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className='container'>
            <h1>My app</h1>
            <Posts posts={currentPosts} loading={loading}/>
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
