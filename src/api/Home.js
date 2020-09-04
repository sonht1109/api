import Control from './Control'
import Table from './Table'
import Paging from './Paging'
import React, { useState, useEffect } from 'react'
import {api} from './GhostAdminAPI'

function Home(){

    const [posts, setPosts] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');
    const [authorFilter, setAuthorFilter] = useState('');
    const [timeFilter, setTimeFilter] = useState('updated_at DESC');
    const limit = 4;
    const [paging, setPaging] = useState(1);
    const [total, setTotal] = useState(0);

    //get filter condition
    let filterString = '';
    if(statusFilter){
        if(authorFilter){
            filterString = `${statusFilter}+${authorFilter}`
        }
        else{
            filterString = statusFilter
        }
    }
    else{
        if(authorFilter){
            filterString = authorFilter
        }
        else{
            filterString = ''
        }
    }

    useEffect(()=>{

        api.posts.browse({
            include: 'tags,authors',
            filter: filterString,
            order: timeFilter,
            limit: limit,
            page: paging
        })
        .then(res => {
            setPosts(res);
            setTotal(res.meta.pagination.total);
        })
        .catch(err => {
            console.log(err);
        })
    }, [filterString, timeFilter, paging])

    const onStatusFilter = (data)=>{
        if(data !== 'all'){
            setStatusFilter(data);
        }
        else{
            setStatusFilter('');
        }
    }
    const onAuthorFilter = (data)=>{
        if(data !== 'all'){
            setAuthorFilter(data);
        }
        else{
            setStatusFilter('');
        }
    }
    const onTimeFilter = (data)=>{
        setTimeFilter(data);
    }
    const onPaging = (index)=>{
        setPaging(index);
    }
    
    return(
        <div>
            <Control 
            posts={posts}
            onStatusFilter={onStatusFilter}
            onAuthorFilter={onAuthorFilter}
            onTimeFilter={onTimeFilter}>
            </Control>

            <Table
            posts={posts}>
            </Table>
            
            <span className="ml-2">
                Current page: {posts.meta ? posts.meta.pagination.page : ''}
            </span>

            <Paging
            onPaging={onPaging}
            limit={limit}
            total={total}>
            </Paging>

        </div>
    )
}

export default Home;