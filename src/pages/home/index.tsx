import React, { useEffect } from 'react'
import Header from '~/components/header'
import { fetchCategories } from '~/redux/features/categories/actions'

const Home: React.FC = () => {
    useEffect(() => {
        fetchCategories()  
    },[])
    return (
        <div>
            <Header />
        </div>
    )
}

export default Home