import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import Image from '../../components/Image'
import data from '../../components/config/data'
import List from '../../components/List'
import Modal from '../../components/Modal'
import Layout from '../../components/Layout'
import './styles.css'

export default function Category() {

    const params = useParams()
    const idCategory = params.id
    // const [category, setCategory] = useState(null)
    const [showModal, setShowModal] = useState('')
    const [item, setItem] = useState(null)
    const [category, setCategory] = useState(null)
    const [items, setItems] = useState(null)
    // useEffect(() => {
    //     const response = data.find(element => element.id === params.id)
    // }, [])

    useEffect(() => {
        async function getCategory() {
            const responseCategory = await api.get(`categories/${idCategory}`)
            setCategory(responseCategory.data)
        }
        getCategory()
    }, [])

    useEffect(() => {
        async function getItems() {
            const responseItems = await api.get(`items?categoryId=${idCategory}`)
            setItems(responseItems.data)
        }
        getItems()
    }, [])

    console.log(items)

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
                        <List items={items}  dispatch={(item) => handleModal(item)}/>
                    </>
                ) }
                {showModal &&
                    <Modal element={item}  dispatch={() => handleModal()}/>
                }
            </div>        
        </Layout>
    )
}
