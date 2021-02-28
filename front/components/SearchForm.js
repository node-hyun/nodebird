import React from 'react'
import { Input } from "antd";


function SearchForm() {
    return (
        <div>
            <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </div>
    )
}

export default SearchForm
