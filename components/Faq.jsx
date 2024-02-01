import React from 'react'

function Faq() {
    const faqData = [
        {
            id:1,
            title:"Lorem ipsum dolor sit amet consectetur adipisicing?",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
        },
        {
            id:2,
            title:"Lorem ipsum dolor sit amet consectetur adipisicing?",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
        },
        {
            id:3,
            title:"Lorem ipsum dolor sit amet consectetur adipisicing?",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
        },
        {
            id:4,
            title:"Lorem ipsum dolor sit amet consectetur adipisicing?",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
        },
    ]
  return (
    <div className="space-y-4 my-10">
        <div className='text-center text-5xl mb-8'>FAQ</div>
        { faqData.map(each=>{
            return <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-white"
            >
            <h2 className="font-medium">{each.title}</h2>

            <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-blue-100">
            {each.desc}
            </p>
        </details>
        })
        }
    </div>
  )
}

export default Faq