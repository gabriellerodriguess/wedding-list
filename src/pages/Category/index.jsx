import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Image from '../../components/Image'
import data from '../../components/config/data'
import List from '../../components/List'
import Modal from '../../components/Modal'
import Layout from '../../components/Layout'
import './styles.css'

export default function Category() {

    const params = useParams()
    const [category, setCategory] = useState(null)
    const [showModal, setShowModal] = useState('')
    const [item, setItem] = useState(null)

    useEffect(() => {
        const response = data.find(element => element.id === params.id)
        setCategory(response)
    }, [])

    function handleModal(item) {
        setShowModal(!showModal)

        if(item) {
            setItem(item)
        }
    }

    return (
        <Layout>
            <div>
                {category && (
                    <>
                        <Image urlImage={category.urlImage} name={category.name} alt={category.name} size='lg'/>
                        <List category={category}  dispatch={(item) => handleModal(item)}/>
                    </>
                ) }
                {showModal &&
                    <Modal element={item}  dispatch={() => handleModal()}/>
                }
            </div>        
        </Layout>
    )
}
