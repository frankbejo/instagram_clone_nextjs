import styles from '../../styles/Home.module.css'
import {MdMoreHoriz} from 'react-icons/md'
import {BsHeart, BsBookmark} from 'react-icons/bs'
import {TfiComment, TfiShare} from 'react-icons/tfi'
import {BiChevronLeftCircle} from 'react-icons/bi'
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import Image from 'next/image';

function Newsfeed({posts, users}){
    const getRatio = (ratio) => {
        switch (ratio) {
            case "1:1":
                return "ratioone"
                break;
            case "4:5":
                return "ratio45"
                break;
            case "16:9":
                return "ratio169"
                break;
            default:
                return "ratioone"
                break;
        }
    }
    return(
        <div className={styles.newsfeed}>
            <div className={styles.user_stories}>
                stories
            </div>
            <div className={styles.feed}>
                <ul>
                    {
                    posts ? posts.map(post => {
                        return <li key={post._id}>
                        {
                            users.filter(user => post.post_owner_id === user._id
                            ).map(item => {
                                const [isClicked, setIsClicked] = useState(false)
                                const [text, setText] = useState("");
                                return <div className={styles.post} key={`${item._id}${post._id}`}>
                                    <div className={styles.post_header}>
                                        <div className={styles.post_header_left}>
                                            <img src={item.image} alt="" width={100} height={100}/>
                                            <div className={styles.post_owner_info}>
                                                <span>{post.post_owner_name}</span>
                                                <br />
                                                {
                                                    post.post_location_name ? (
                                                        <span>{post.post_location_name}</span>
                                                    ):
                                                    (null)
                                                }
                                            </div>
                                        </div>
                                        
                                        <div className={styles.post_setting}>
                                            <MdMoreHoriz />
                                        </div>
                                    </div>
                                    <div className={styles.content_container}>
                                            <div className={`post_container ${isClicked? "clicked":""}`}>
                                                {
                                                    post.content.map(content => {
                                                        if(content.type === "image"){
                                                            return <Image src={content.post_content} width={500} height={500} />
                                                        }
                                                        else if(content.type === "video"){
                                                            return <video src={content.post_content}></video>
                                                        }
                                                        else{
                                                            return
                                                        }
                                                    })
                                                }
                                                {
                                                    
                                                    post.content.length > 1 ? (
                                                        <div className={styles.post_container_controls}>
                                                            <div className='to_left' >
                                                                <BiChevronLeftCircle />
                                                            </div>
                                                            <div className="to_right" onClick={() => setIsClicked(true)}>
                                                                <BiChevronLeftCircle />
                                                            </div>
                                                        </div>
                                                    ):
                                                    (
                                                        null
                                                    )
                                                }
                                                
                                            </div>
                                            
                                            
                                    </div>
                                    <div className={styles.post_footer}>
                                            <div className={styles.post_menus}>
                                                <div className={styles.post_menus_left}>
                                                    <BsHeart />
                                                    <TfiComment />
                                                    <TfiShare />
                                                </div>
                                                <div className={styles.bookmark}>
                                                    <BsBookmark />
                                                </div>
                                            </div>
                                            <span className={styles.likes}>
                                                200,000 likes
                                            </span>
                                            
                                            <div className={styles.caption}>
                                                <span>{post.post_owner_name} </span>
                                                {
                                                    post.post ? 
                                                    post.post :
                                                    null
                                                }
                                            </div>
                                            <div className={styles.comments}>
                                                View all 1,818 comments
                                            </div>
                                            <span className={styles.timespan}>
                                                5 HOURS AGO
                                            </span>
                                    </div>
                                    <div className={styles.add_comment}>
                                        <InputEmoji
                                            value={text}
                                            onChange={setText}
                                            cleanOnEnter
                                            placeholder="Add a comment"
                                            />
                                            <div className={styles.post_comment}>
                                                <span>Post</span>
                                            </div>
                                    </div>
                                </div>
                                
                            })
                        }
                        </li>
                    }):
                    null
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Newsfeed