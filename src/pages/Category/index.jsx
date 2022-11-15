import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import Image from '../../components/Image'
import List from '../../components/List'
import Modal from '../../components/Modal'
import Layout from '../../components/Layout'
import './styles.css'

export default function Category() {

    const params = useParams()
    const idCategory = params.id
    const [showModal, setShowModal] = useState('')
    const [item, setItem] = useState(null)
    const [category, setCategory] = useState(null)
    const [items, setItems] = useState(null)

    useEffect(() => {
        async function getCategory() {
            const responseCategory = await api.get(`categories/${idCategory}`)
            setCategory(responseCategory.data)
        }
        getCategory()
    }, [])
    
    function getItems() {
        setItems(null)
        api.get(`items?categoryId=${idCategory}`).then(response => {
            console.log(response.data)
            setItems(response.data)
        })
    }

    useEffect(() => {
        getItems()
    }, [])

    function handleModal(item) {
        setShowModal(!showModal)
        
        if(item) {
           return setItem(item)
        }
    }

    return (
        <Layout>
            <div>
                {category && (
                    <>
                        <Image urlImage={category.urlImage} name={category.name} alt={category.name} size='lg'/>
                        <List items={items}  dispatch={(item) => handleModal(item)}/>
                    </>
                ) }
                {showModal &&
                    <Modal item={item} onSuccess={() => getItems()} dispatch={() => handleModal()}/>
                }
            </div>        
        </Layout>
    )
}
