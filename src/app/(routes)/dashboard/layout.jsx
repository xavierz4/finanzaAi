'use client'

import React, {useEffect} from 'react'
import DashboarHeader from './_components/DashboardHeader'
import SideNav from './_components/SideNav'


import { db } from "../../../utils/dbConfig";
import { Budgets } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/router';

function DashboardLayout ({ children }) {
    const { user } = useUser()
    const router = useRouter()
    
    useEffect(()=>{
        user && checkUserBudgets()
    }, [third])

 const checkUserBudgets = async () => { 
    const result = await db.select.from(Budgets).where(eq(Budgets.createdBy, user?.PrimaryEmailAdress?.emailAdress))
    if( result?.length === 0 ){
        router.replace('./dashboard/budgets')
    }
 }
 return (
    <div className='fixed md:w-64  hidden md:block'>
        <div>
            <SideNav />
        </div>
        <div className='md:ml-64'>
            <DashboarHeader />
            {children}
        </div>
    </div>
 )
}
