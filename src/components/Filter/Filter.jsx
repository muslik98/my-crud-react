import React from 'react'
import InputKey from './common/InputKey'
import {ClientOption,  StatusClient} from './common/InputOption'
import CustomButton from './common/FilterButton'
import './filter.css'

function Filter() {
    return (
        <div className='filter-container'>
            <p>Filter</p>
            <form>
                <InputKey/>
                <ClientOption />
                <StatusClient />
                <CustomButton title="Search" />
                <CustomButton title="Clear" />
            </form>
        </div>
    );
}

export default Filter;