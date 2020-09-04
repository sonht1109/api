import './App.css';
import React from 'react'

// import Table from './components/Table';
// import Control from './components/Control';
// import Footer from './components/Footer';
import Api from './api/Api';

function App(){

  // const [data, setData] = useState([]);
  // const [search, setSearch] = useState('');
  // const [sort, setSort] = useState('');
  // const [paging, setPaging] = useState(1);
  // const [limit, setLimit] = useState(3);

  // useEffect(() => {
  //   fetch(`http://145.239.255.230:2368/ghost/api/v3/content/posts/?key=c5af5cf4e8a3f121d54fa4e8bf${search?"&filter=title:'"+search+"'":''}${sort!==''?'&order='+sort:''}&page=${paging}&limit=${limit}`)
  //   .then(res=>res.json())
  //   .then(res=>{
  //     if(res){
  //       setData(res.posts)
  //     }
  //     else{
  //       setData([])
  //     }
  //   })
  //   .catch(err=>console.log(err))
  // }, [search, sort, paging])

  return(
      <div>
        <Api></Api>

        {/* <Control
        onSearch={setSearch}
        onSort={setSort}
        ></Control>
        <Table
        data={data}
        ></Table>
        <Footer
        onPaging={setPaging}
        ></Footer> */}
        
      </div>
  )
}

export default App;