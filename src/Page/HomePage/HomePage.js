import React from 'react'
import Banner from '../../Components/Banner/Banner'
import TabMovie from '../../Components/TabMovie/TabMovie'
import ListMovie from './ListMovie'

export default function HomePage() {
  return (
    <div className=''>
        <Banner/>
        <ListMovie/>
        <TabMovie/>
    </div>
  )
}
