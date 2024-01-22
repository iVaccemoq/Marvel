import '../error/Page404.scss'

import { Link } from 'react-router-dom'

const Page404 = () => {
    return(
        <div className='notFound'>
            <Link className='notFound__link' to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;