import React, { createContext, useState, useEffect } from 'react'
import { API_URL } from '../../utils/utils';


export const ContactContext = createContext()

export function ContactProvider({ children }) {
    const [contactInfo, setContactInfo] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            let url = `${API_URL}/api/contact-us`

            let data = await fetch(url)
            data = await data.json()
            setContactInfo({ ...data.data.attributes || {} })
            setLoading(false)
        }
        if (typeof window !== "undefined") {
            fetchData()
        }
    }, []);


    return <ContactContext.Provider value={{ contactInfo }}>
        {loading ? <></> : children}
    </ContactContext.Provider>
}
