"use client"
import Link from "next/link";
import React, { useState } from "react";
import Rating from "./rating";

function ProductCard({ card }) {
    const [count,setCount] = useState(0)
    const { id, image, title, price, rating } = card;

    const checkout=()=>{
        console.log("CHECKOUT",card,count)
    }
  return (
    <div className="">
      <div className="block bg-white rounded-lg p-6 shadow-sm shadow-indigo-100 h-96">
        <img
          alt="Home"
          src={image}
          className="h-40 w-full rounded-md object-contain items-center"
        />
        <Rating rating={rating} />
        <div className="mt-2 flex justify-between">
            <button onClick={()=>setCount(count-1)}
            className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            disabled={count < 1}
            >
            -
            </button>
            <div className="text-black px-3 self-center">{count}</div>
            <button onClick={()=>setCount(count+1)}
            className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            >
            +
            </button>

        </div>
          <div className="mt-6 inline-flex w-full items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            onClick={()=>checkout()}
          >
            <span className="text-sm font-medium"> Redeem </span>
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        <Link href={`/giftcard/${id}`}>
            <div className="mt-5 text-blue-100">View Details</div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
