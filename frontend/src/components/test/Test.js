import React, { useState, useEffect } from 'react'

import { axios } from '../../axios'

const Test = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await axios.get('/api/v1/test').catch((err) => console.log(err))
        
        if (res && res.data) {
            console.log(res.data.test)
            setData(res.data.test)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
      <div>
        <pre>{JSON.stringify(data, null, '\t')}</pre>
      </div>
    )
}

export default Test
