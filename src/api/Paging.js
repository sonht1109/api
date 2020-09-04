import React, {useState} from 'react'

function Paging(props){

    const [currentPage, setCurrentPage] = useState(1);

    const onPaging = (e)=>{
        var value = e.target.getAttribute('data-index');
        setCurrentPage(value)
        props.onPaging(value)
    }

    const createPageIndex = [];
    
    if(props.total !== 0){
        for(let i=1; i<=Math.ceil(props.total/props.limit); i++){
            createPageIndex.push(
                <span 
                className="page-index"
                data-index={i}
                onClick={onPaging}
                key={i}>
                    {i}
                </span>
            )
        }
    }

    const onPrev = (e)=>{
        if(currentPage > 1){
            setCurrentPage(currentPage-1)
            props.onPaging(currentPage-1)
        }
    }
    const onNext = (e)=>{
        if(currentPage < Math.ceil(props.total/props.limit)){
            setCurrentPage(currentPage+1)
            props.onPaging(currentPage+1)
        }
    }

    return(
        <div className="text-center mt-5 mb-5">
            <i className="fa fa-chevron-left pointer mr-5" aria-hidden="true" onClick={onPrev}></i>
            {createPageIndex}
            <i className="fa fa-chevron-right pointer ml-5" aria-hidden="true" onClick={onNext}></i>
        </div>
    )
}

export default Paging;