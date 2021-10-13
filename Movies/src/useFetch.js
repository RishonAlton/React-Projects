import { useState, useEffect } from "react"


const baseURL = "https://www.omdbapi.com/?apikey=" + process.env.REACT_APP_API_KEY


const useFetch = (urlParams) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({show: false, message: ""})
    const [data, setData] = useState(null)

    const fetchData = async (url) => {
        setLoading(true)
        try {
            const response = await fetch(url)    
            const data = await response.json()
            if(data.Response === "True") {
                setData(data.Search || data)
                setError({show: false, message: ""})
            }
            else {
                setError({show: true, message: data.Error})
            }
            setLoading(false)
        } 
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData(baseURL + urlParams)
    }, [urlParams])

    return {
        loading,
        error,
        data
    }

}


export default useFetch