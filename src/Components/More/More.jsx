import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from './More.module.scss'

const More = (props) => {

const [comment , setComment] = useState([])


useEffect(() => {
    const fetchData = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments")

        setComment(data)
    }
    fetchData()
},[])

    return ( 
        <div>
<h1>Comments</h1>

<div className={styles.hight}>
    {comment.map((comment) => (
        <div className={styles.wrapper}>
            <div className={styles.card}>
            <h5>Post id:{comment.postId}</h5>
            <h6>User id:{comment.id}</h6>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            
                <span>{comment.body}</span>
                <br />
                <Link to='/' style={{marginRight:15}}>Back</Link>
               
            </div>

        </div>
    ))}
</div>
        </div>
     );
}

export default More;