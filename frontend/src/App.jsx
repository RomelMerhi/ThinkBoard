import React from 'react'

import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import toast from 'react-hot-toast'
import NoteDetailPage from './pages/NoteDetailPage'


const App = () => {
  return (
    <div className='relative h-full w-full'>
<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#0f9d58_100%)]"></div>

      <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/create" element={<CreatePage />} />
<Route path="/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App