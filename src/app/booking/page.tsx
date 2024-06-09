

import SimpleNavbar from '@/components/layouts/simple-navbar'
import { Form } from './components/booking-form'

export default function BookingForm() {
  return (
    <>
     <SimpleNavbar />

     <div className="booking-form py-11">
        <Form />
     </div>
    </>
  )
}