import ButtonComponent from '@/components/Button'
import { Footer } from '@/components/layout'
import HorizontalLinearStepper from '@/components/Stepper'
import { Grid } from '@mui/material'
import React from 'react'
import DetailCard from './components/DetailCard/DetailCard'
import PriceDetailCard from './components/PriceDetailCard/PriceDetailCard'

export default function CustomerDetail() {
  return (
    <section className="bg-gray-50 pb-20 pt-4">
    <div className='container mx-auto pl-24 pr-24 pb-5'>
      <div className='pt-28'>
      <HorizontalLinearStepper />
      </div>
      <Grid container spacing={2}>
          <Grid item xs={8} md={8} xl={8}>
          <div className='pt-5'>
      <DetailCard />
      
      </div>
      <div className='flex mt-5'>
      <ButtonComponent name="Back" icon={false} />
      <ButtonComponent classes="ml-2" name="Next" icon={false} style={{backgroundColor: "#1A97D4", color: "white"}} />
 </div>
           </Grid>
           
           <Grid item xs={4} md={4} xl={4}>
            <PriceDetailCard />
           </Grid>
        </Grid>
      
    </div>
    <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </section>
  )
}
