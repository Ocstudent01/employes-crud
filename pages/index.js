import Head from 'next/head'
import { BiCheck, BiUserPlus,BiX} from "react-icons/bi";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/table';
import Form from '../components/form';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {toggleChangeAction, deleteAction} from '../redux/reducer';
import { deleteUser, getUsers } from '../lib/helper';
import { useQueryClient } from 'react-query';

export default function Home() {

  const visible = useSelector((state)=>state.app.client.toggleForm)
  const deleteId = useSelector((state)=>state.app.client.deleteId)
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const handler = ()=>{
    //setVisible(visible ? false : true) esta manera pero hay otra manera mas corta 
    //setVisible(!visible)
    dispatch(toggleChangeAction())
  }

  const deletehandler = async()=>{
    if(deleteId){
      await deleteUser(deleteId);
      await queryClient.prefetchQuery('users',getUsers)
      await dispatch(deleteAction(null))
    }
    
  }

  const cancelhandler = async()=>{
    console.log("cancel")
    await dispatch(deleteAction(null))
  }
  
  return (
    <section className={styles.container}>
      <Head>
        <title>Crud Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className='text-xl md:text-4xl text-center font-bold py-6'>Employes Manayament</h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className='left flex gap-3'>
            <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:boder-indigo-500 hover:text-gray-800'>
              Add Employee <span className='px-1'><BiUserPlus size={23}></BiUserPlus></span>
            </button>
          </div>
            {deleteId? DeleteComponent({deletehandler,cancelhandler}):<></>}
        </div>

        {/* collapsable Form*/}
        
        {/*<Form></Form>*/}
        {visible ? <Form></Form>:<></>}
        

        {/*table*/}
        <div className='container mx-auto'>
          <Table></Table>
        </div>
      </main>
    </section>
  )
}

function DeleteComponent({deletehandler,cancelhandler}){
  return (
    <div className='flex gap-5'>
      <button>Are you sure?</button>
      <button onClick={deletehandler} className='flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>
        Yes<span className='px-1'><BiX color='(255 255 255)' size={25}></BiX></span></button>
      <button onClick={cancelhandler} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-green-500 hover:border-red-500 hover:text-gray-50'>
        No <span className='px-1'><BiCheck color='(255 255 255)' size={25}></BiCheck></span></button>
    </div>
  )
}