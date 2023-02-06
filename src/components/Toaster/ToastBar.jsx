import React from 'react'
import toast, { Toaster } from 'react-hot-toast';


const ToastBar = ({ message }) => {
    return toast(message);
}



export default ToastBar