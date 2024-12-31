"use client"
import { LuDelete } from "react-icons/lu";



import { useState } from 'react';
import { Button } from "./ui/button";
import { Delete } from "lucide-react";

type Comment = {
    name: string;
    comment: string;
};

export default function Comments() {
    const [comments, setComments] = useState<Comment[]>([]); // Define array of Comment type
    const [newComment, setNewComment] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleAddComment = () => {
        if (name.trim() && newComment.trim()) {
            setComments([...comments, { name, comment: newComment }]);
            setName('');
            setNewComment('');
            alert(`Thank you, ${name}! Your comment has been added.`);
        } else {
            alert('Please enter both name and comment.');
        }
    };
   

    const handleDeleteComment = (index: number) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
    };
    let second = 6;

    return (
        <div className="w-full  flex justify-center items-center">
             <div className="w-[90%] sm:w-[80%] flex flex-col space-y-3 sm:ml-5">
            <ul className="sm:pl-5 space-y-3">
                {comments.map((comment, index) => (
                    <li key={index} className="border py-5 px-3 rounded-[10px] relative">
                        <strong className="text-xl">{comment.name}:</strong> {comment.comment}
                        <button onClick={() => handleDeleteComment(index)}><LuDelete className="
                        absolute top-0 right-2 ml-4 text-2xl text-red-500"/></button>
                        <span className="text-gray-400 absolute top-0 right-10">{--second}s ago</span>
                    
                    </li>
                ))} 
                </ul> 
             <h2 className="text-2xl font-bold">Comments</h2>
           
           <input
               type="text"
               placeholder="Your Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="sm:w-[40%] py-2 rounded-[10px]  border px-1"
           />
           <textarea
              cols={5}
              rows={5}
               placeholder="Write a comment..."
               value={newComment}
                className="sm:w-[60%] py-2 rounded-[10px] border px-1"
               onChange={(e) => setNewComment(e.target.value)}></textarea>
          
           <Button onClick={handleAddComment} className="w-32 bg-green-400 hover:bg-green-500 font-bold">Add Comment</Button>
             </div>
           
        </div>
    );
}
 