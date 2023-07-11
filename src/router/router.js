import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './rootLayout/RootLayout'
import Project from '../project/Main'
import Project2 from '../assigment1/Main'


export const router = createBrowserRouter(
    createRoutesFromElements(
<Route path='/' element={<RootLayout/>}>
    <Route path='task1' element={<Project/>}/>
    <Route path='task2' element={<Project2/>}/>
</Route>
    ))