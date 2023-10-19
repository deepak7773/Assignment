import React,{lazy,Suspense}from 'react'
import Hello from './Hello'

const Morning = lazy(()=> import("./Morning"));

function Main_lazy() {
  return (
     <div className='container mt-5'>
        <h1>hii i am Main Component</h1>
        <hr />
        <Hello/>
        <Suspense fallback={<div class="spinner-border"></div>}>
           <Morning/>
        </Suspense>
     </div>
  )
}

export default Main_lazy