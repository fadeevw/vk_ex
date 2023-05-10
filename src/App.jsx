import AirDatepickerForm from "./components/AirDatepickerForm.jsx"

import { data } from "./dropdown.data.js"
import { useState } from "react"

export const App = () => {
   const [selected, setSelected] = useState({ tower: null, level: null, room: null, })
   const [comment, setComment] = useState('')

   function confirmСlick(e) {
      e.preventDefault()
      console.log(JSON.stringify({ ...selected, comment }))
   }

   function resetClick(e) {
      e.preventDefault()
      window.location.reload()
   }

   return (
      <>
         <section className="container flex h-screen animate-fade-in">
            <form className="m-auto p-10 pb-7 rounded bg-gray-100 shadow-md transition-shadow hover:shadow-lg" action="" method="">
               <div className="p-2 w-[300px] pt-0">
                  <label className="label-primary-red">{data[0].description}</label>
                  <div>
                     <select className="input-primary"
                        value={selected.tower}
                        onChange={e => setSelected(prev => ({ ...prev, tower: e.target.value }))}>
                        {
                           data[0].params.map((opt, index) => (
                              <option className="px-1 text-gray-600" key={index}>{opt}</option>
                           ))
                        }
                        <option className="px-1 text-gray-400" selected disabled>...</option>
                     </select>
                  </div>
               </div>
               <div className="p-2 w-[300px]">
                  <label className="label-primary-red">{data[1].description}</label>
                  <div>
                     <select className="input-primary"
                        value={selected.level}
                        onChange={e => setSelected(prev => ({ ...prev, level: e.target.value }))}>
                        {
                           data[1].params.map((opt, index) => (
                              <option className="px-1 text-gray-600" key={index}>{opt}</option>
                           ))
                        }
                        <option className="px-1 text-gray-400" selected disabled>...</option>
                     </select>
                  </div>
               </div>
               <div className="p-2 w-[300px]">
                  <label className="label-primary-red">{data[2].description}</label>
                  <div>
                     <select className="input-primary"
                        value={selected.room}
                        onChange={e => setSelected(prev => ({ ...prev, room: e.target.value }))}>
                        {
                           data[2].params.map((opt, index) => (
                              <option className="px-1 text-gray-600" key={index}>{opt}</option>
                           ))
                        }
                        <option className="px-1 text-gray-400" selected disabled>...</option>
                     </select>
                  </div>
               </div>

               <div className="p-2 w-[300px]">
                  <label className="label-primary">Добавьте комментарий:</label>
                  <textarea className="h-20 max-h-64 pt-1 resize-y input-primary" placeholder="..."
                     value={comment}
                     onChange={e => setComment(e.target.value)}>
                  </textarea>
               </div>

               <AirDatepickerForm />

               <div className="flex justify-center mt-7">
                  <div className="flex">
                     <button className="py-2 px-4 btn-primary" type="submit" onClick={confirmСlick} disabled={false}>Отправить</button>
                     <button className="ml-2 w-[40px] h-[40px] btn-primary" type="reset" onClick={resetClick}>✕</button>
                  </div>
               </div>
            </form>
         </section>
      </>
   )
}

export default App
