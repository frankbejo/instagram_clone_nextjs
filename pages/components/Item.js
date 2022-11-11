import styles from '../../styles/Home.module.css'
import {MdMoreHoriz, MdBookmarkBorder} from 'react-icons/md'
import {AiOutlineHeart, AiOutlineComment, AiOutlineSend} from 'react-icons/ai'
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";

const Item = ({post, users}) => {
    const [text, setText] = useState("");
    return <li key={post._id}>
    {
        users.filter(user => post.post_owner_id === user._id
        ).map(item => {
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
                        {
                            post.content ? (
                                <img src={post.content[0]} alt="" />
                            ):
                            (null)
                        }
                </div>
                <div className={styles.post_footer}>
                        <div className={styles.post_menus}>
                            <div className={styles.post_menus_left}>
                                <AiOutlineHeart />
                                <AiOutlineComment />
                                <AiOutlineSend />
                            </div>
                            <div className={styles.bookmark}>
                                <MdBookmarkBorder />
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
                        placeholder="add a comment"
                        />
                        <div className={styles.post_comment}>
                            <span>Post</span>
                        </div>
                </div>
            </div>
            
        })
    }
    </li>
}

export default Item