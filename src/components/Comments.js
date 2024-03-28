import React from 'react'
import { FcLike } from "react-icons/fc";

export default function Comments() {
  return (
    <div className='text-left m-4 '>
        <div className='p-2 bg-slate-100 rounded'>
            <div className='font-bold text-xl'>Comments</div>
            <div className='mb-2'>
                <div className='font-bold text-xs'>Jream123</div>
                <div>What a great climb!</div>
                <div className='flex items-center text-xs'><span className="mr-1">46</span><FcLike /></div>
            </div>
            <div className='mb-2'>
                <div className='font-bold text-xs'>DRWBuCHA</div>
                <div>I know strong dude up there cool beta :)</div>
                <div className='flex items-center text-xs'><span className="mr-1">2</span><FcLike /></div>
            </div>
            
        </div>
        <div className='mt-4 border-b-2 w-full'>Enter a comment</div>
    </div>
  )
}
