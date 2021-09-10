import React from 'react'
import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa'


const sublinks = [
    {
        page: 'Products',
        links: [
            { label: 'payment', icon: <FaCreditCard />, url: 'products.html' },
            { label: 'terminal', icon: <FaCreditCard />, url: 'products.html' },
            { label: 'connect', icon: <FaCreditCard />, url: 'products.html' },
        ]
    },
    {
        page: 'Developers',
        links: [
            { label: 'libraries', icon: <FaBook />, url: 'developers.html' },
            { label: 'plugins', icon: <FaBook />, url: 'developers.html' },
            { label: 'billing', icon: <FaBook />, url: 'developers.html' },
        ]
    },
    {
        page: 'Company',
        links: [
            { label: 'about', icon: <FaBriefcase />, url: 'company.html' },
            { label: 'customers', icon: <FaBriefcase />, url: 'company.html' },
        ]
    }
]


export default sublinks