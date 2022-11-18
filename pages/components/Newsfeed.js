import {MdMoreHoriz} from 'react-icons/md'
import {BsHeart, BsBookmark} from 'react-icons/bs'
import {TfiComment, TfiShare} from 'react-icons/tfi'
import {BiChevronLeftCircle} from 'react-icons/bi'
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import Image from 'next/image';

function Newsfeed({posts, users}){
    return(
        <div className='newsfeed flex flex-col w-full gap-3'>
            <div className='stories flex items-center h-32 rounded-lg'>
                <div className="stories_container overflow-hidden">
                    <ul className='flex gap-2 px-3'>
                        <li className='flex flex-col items-center w-16'>
                            <div className="image_container relative w-14 h-14">
                                <Image src='/1.jpg' alt="" layout='fill' objectFit='cover' className='rounded-full'/>
                            </div>
                            <div className="story_owner relative w-20 overflow-hidden text-ellipsis px-2">
                                <span className=''>frankbejo</span>
                            </div>
                        </li>
                        <li className='flex flex-col items-center w-16'>
                            <div className="image_container relative w-14 h-14">
                                <Image src='/1.jpg' alt="" layout='fill' objectFit='cover' className='rounded-full'/>
                            </div>
                            <div className="story_owner relative w-20 overflow-hidden text-ellipsis px-2">
                                <span className=''>janaudreysus</span>
                            </div>
                        </li>
                        <li className='flex flex-col items-center w-16'>
                            <div className="image_container relative w-14 h-14">
                                <Image src='/1.jpg' alt="" layout='fill' objectFit='cover' className='rounded-full'/>
                            </div>
                            <div className="story_owner relative w-20 overflow-hidden text-ellipsis px-2">
                                <span className=''>frankbejoawdawd</span>
                            </div>
                        </li>
                        <li className='flex flex-col items-center w-16'>
                            <div className="image_container relative w-14 h-14">
                                <Image src='/1.jpg' alt="" layout='fill' objectFit='cover' className='rounded-full'/>
                            </div>
                            <div className="story_owner relative w-20 overflow-hidden text-ellipsis px-2">
                                <span className=''>frankbejoawdawd</span>
                            </div>
                        </li>
                        <li className='flex flex-col items-center w-16'>
                            <div className="image_container relative w-14 h-14">
                                <Image src='/1.jpg' alt="" layout='fill' objectFit='cover' className='rounded-full'/>
                            </div>
                            <div className="story_owner relative w-20 overflow-hidden text-ellipsis px-2">
                                <span className=''>frankbejoawdawd</span>
                            </div>
                        </li>
                        <li className='flex flex-col items-center w-16'>
                            <div className="image_container relative w-14 h-14">
                                <Image src='/1.jpg' alt="" layout='fill' objectFit='cover' className='rounded-full'/>
                            </div>
                            <div className="story_owner relative w-20 overflow-hidden text-ellipsis px-2">
                                <span className=''>frankbejoawdawd</span>
                            </div>
                        </li>
                        <li className='flex flex-col items-center w-16'>
                            <div className="image_container relative w-14 h-14">
                                <Image src='/1.jpg' alt="" layout='fill' objectFit='cover' className='rounded-full'/>
                            </div>
                            <div className="story_owner relative w-20 overflow-hidden text-ellipsis px-2">
                                <span className=''>frankbejoawdawd</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='posts flex flex-col gap-3'>
                    {
                    posts ? posts.map(post => {
                        const getRatio = (ratio) => {
                            switch(ratio){
                                case "1/1": 
                                    return "aspect-square"
                                case "4/5":
                                    return "aspect-[4/5]"
                                case "16/9":
                                    return "aspect-video"
                                default: 
                                    return "aspect-square"
                            }
                        }
                        return <li key={post._id} className="rounded-lg">
                        {
                            users.filter(user => post.post_owner_id === user._id
                            ).map(item => {
                                const [text, setText] = useState("");
                                return <div key={`${item._id}${post._id}`}>
                                    <div className='flex justify-between items-center py-2 px-3'>
                                        <div className='flex items-center gap-3'>
                                            <div className='relative w-8 h-8'>
                                                <Image src={item.image} alt="" layout='fill' objectFit='cover' className='rounded-full'/>
                                            </div>
                                            <div>
                                                <span className='font-semibold'>{post.post_owner_name}</span>
                                                <br />
                                                {
                                                    post.post_location_name ? (
                                                        <span>{post.post_location_name}</span>
                                                    ):
                                                    (null)
                                                }
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <MdMoreHoriz className='w-6 h-6'/>
                                        </div>
                                    </div>
                                    <div>
                                            <div className={`post_container flex ${getRatio(post.ratio)} overflow-hidden`}>
                                                {
                                                    post.content.map(content => {
                                                        if(content.type === "image"){
                                                            return <div className={`relative ${getRatio(post.ratio)}`}>
                                                                <Image src={content.post_content} alt="" layout='fill' objectFit='cover' />
                                                            </div>
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
                                                        <div className=''>
                                                            <div>
                                                                <BiChevronLeftCircle className='w-6 h-6'/>
                                                            </div>
                                                            <div>
                                                                <BiChevronLeftCircle className='w-6 h-6'/>
                                                            </div>
                                                        </div>
                                                    ):
                                                    (
                                                        null
                                                    )
                                                }
                                                
                                            </div>
                                            
                                            
                                    </div>
                                    <div className='pb-2 px-3'>
                                            <div className='flex justify-between'>
                                                <div className='flex '>
                                                    <div className='p-2 -ml-2'>
                                                        <BsHeart className='w-6 h-6'/>
                                                    </div>
                                                    <div className='p-2'>
                                                        <TfiComment className='w-6 h-6'/>
                                                    </div>
                                                    <div className='p-2'>
                                                        <TfiShare className='w-6 h-6'/>
                                                    </div>
                                                </div>
                                                <div className='p-2 -mr-2'>
                                                    <BsBookmark className='w-6 h-6'/>
                                                </div>
                                            </div>
                                            <span className='font-semibold'>
                                                200,000 likes
                                            </span>
                                            
                                            <div>
                                                <span className='font-semibold'>{post.post_owner_name} </span>
                                                {
                                                    post.post ? 
                                                    post.post :
                                                    null
                                                }
                                            </div>
                                            <div>
                                                View all 1,818 comments
                                            </div>
                                            <span className='text-xs'>
                                                5 HOURS AGO
                                            </span>
                                    </div>
                                    <div className='add_comment px-3'>
                                        <InputEmoji
                                            value={text}
                                            onChange={setText}
                                            cleanOnEnter
                                            placeholder="Add a comment"
                                            />
                                            <div className={`${text === "" ? "disable_post_button":"post_button"} py-2 cursor-pointer`}>
                                                <button>
                                                    <span className='font-semibold'>Post</span>
                                                </button>
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