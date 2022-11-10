import React from 'react'
import Image from '../../components/Image'
import data from '../../components/config/data'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.css'

export default function Category() {

    const params = useParams()
    const [category, setCategory] = useState(null)
    
    useEffect(() => {
        const response = data.find(element => element.id === params.id)
        setCategory(response)
        console.log(data)
    }, [])

    return (
        <div>
            {category &&  <Image urlImage={category.urlImage} name={category.name} alt={category.name} size='lg' /> }
        </div>
    )
}
