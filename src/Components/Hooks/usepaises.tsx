import React from 'react'
import { Country } from './Country';
import Tabla from './UsersTable';
const paises = () => {
    const {contrys} = Country();
    return (
        <>
            <div className=''>
            {
                contrys.map(country => <div className='' key={country.id}>
                    <Tabla key={country.id} {...country} /> </div>
                    )
            }
            </div>
        </>
    )
}
export default paises