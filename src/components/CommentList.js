import { useState } from 'react'
import Comment from './Comment'

function CommentList({comments}) {
    const [hideComment, setHideComment] = useState(true);
    const [search, setSearch] = useState("")
    const [sortValue, setSort] = useState("ascending")
    
    let mapComments = comments.map(comment => {
        return <Comment comment={comment}/>
    });

    function toggleComments() {
        setHideComment(!hideComment)
    };

    function searchSubmit(e) {
        e.preventDefault();
        setSearch(search=>e.target.textfield.value)
    };

    let searchFilterList = comments.filter(e => {
        if (!search) {
            return true;
        } else if (e.user === search) {
            return true
        } else {
            return false
        }
    }).map(comment => {
        return <Comment comment={comment}/>
    })

    function sortClick(e) {
        e.preventDefault();
        setSort(sortValue => e.target.value)
    }
    
    let displayComments = () => {
        return (
            <>
                <h2>{comments.length} Comments</h2>
                <form onSubmit={searchSubmit}>
                    <input type="text" name="textfield"></input>
                    <input type="submit"></input>
                </form>
                <select onChange={sortClick}>
                    <option value="ascending">Alphabetical A > Z</option>
                    <option value="descending">Alphabetical Z > A</option>
                </select>
                {searchFilterList}
            </>
        )
    };

    return (
        <>
            <br />
            <br />
            <button onClick={toggleComments}>Hide Comments</button>
            { hideComment ? displayComments() : null }
        </>
    )
}

export default CommentList