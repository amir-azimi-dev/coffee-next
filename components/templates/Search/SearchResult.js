import React from 'react'
import Card from '@/components/modules/Card/Card'

function SearchResult({ items, searchValue }) {
    const regex = new RegExp(searchValue, "i")

    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Search</h4>
                    <h1 className="display-4">{searchValue}</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-5 text-center">* Hot Coffee *</h1>
                        {items?.filter(item => item.type === "hot" && item.title.match(regex)).map(menu => <Card key={menu.id} {...menu} />)}

                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5 text-center">* Cold Coffee *</h1>
                        {items?.filter(item => item.type === "cold" && item.title.match(regex)).map(menu => <Card key={menu.id} {...menu} />)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult