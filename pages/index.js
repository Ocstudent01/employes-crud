import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/table';
import Form from '../components/form';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {toggleChangeAction} from '../redux/reducer';

import { BiUserPlus } from "react-icons/bi";

export default function Home() {

  const visible = useSelector((state)=>state.app.client.toggleForm)
  const dispatch = useDispatch()

  const handler = ()=>{
    //setVisible(visible ? false : true) esta manera pero hay otra manera mas corta 
    //setVisible(!visible)
    dispatch(toggleChangeAction())
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
