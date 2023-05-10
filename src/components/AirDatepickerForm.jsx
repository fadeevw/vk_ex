/* eslint-disable react/prop-types */
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

import { useEffect } from 'react';

export const AirDatepickerForm = () => {
   useEffect(() => {
      new AirDatepicker('#airdatepicker', {
         position: 'top center',
         selectedDates: [new Date(), new Date()],
         multipleDatesSeparator: ' - ',
         timepicker: true,
         range: true,
         minHours: 9,
         maxHours: 18,
         minutesStep: 10,
      })
   })

   return (
      <>
         <div className="p-2 pb-0">
            <label className="label-primary-red">Укажите дату и время проведения:</label>
            <div className="">
               <input className="input-primary" type="text" id="airdatepicker" />
            </div>
         </div>
      </>
   )
}

export default AirDatepickerForm