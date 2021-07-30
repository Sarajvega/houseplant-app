import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/dist/client/router'
// single article page
const article = () => {
    // contains any params in route.
    const router = useRouter()
    const {id} = router.query

    return (
        <div>
            <h3>This is article {id}</h3>
            <Link href="/">
                Go back &rarr;
            </Link>
        </div>

    )
}

// bultin data fetching for pages
// getstaticprops gets data at build time
// get serverside props = .fetch data at time of request
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }

// }

// look into getParams(), does the same thing as above. 
export default article
