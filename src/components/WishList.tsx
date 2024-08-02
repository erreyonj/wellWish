import React, { useEffect, useState } from 'react'
// import { makeWish } from './models/Wish';

const WishList = async () => {

    const collectWishes = async () => {
        const res = await fetch("http://localhost:3000/api/wishes");
        const wishes = await res.json();
        console.log(wishes)
        return wishes    
    }

    const wishes = await collectWishes();

    // const [wishes, setWishes] = useState([])
    // useEffect(()=>{
    //     collectWishes().then((wishes)=>{
    //         setWishes(wishes)
    //     });
    // }, []);

    return (
        <div>
            {wishes.map((wish:any)=>(
                <div key={wish._id}>
                    <h1 className='mx-auto h-[4rem] flex flex-col place-content-center'>{wish.title}</h1>
                    <h3 className={`${wish.subtitle?'':'hidden'}`}>{wish.subtitle}</h3>
                    {/* <img src={`${wish.image}`} alt="Maybe an Image?" className="mx-auto my-5 w-10" /> */}
                    <p>{wish.caption}</p>
                </div>
            ))}
      
        </div>
    )
}

export default WishList
