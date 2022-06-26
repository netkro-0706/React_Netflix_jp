import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const MoviesSort = () => {

    let [close, setClose] = useState(true);

    return (
        <div className={ close
            ? 'sort_wrap_close remote_wrap'
            : 'sort_wrap remote_wrap'
        }>
            <div className='sort_top top'>
                <span>Sort</span>
                {close
                    ? <span onClick={() => { setClose(false) }}><FontAwesomeIcon icon={faArrowRight} /></span>
                    : <span onClick={() => { setClose(true) }}><FontAwesomeIcon icon={faArrowDown} /></span>
                }

            </div>
            <div className={close
                ? 'sort_under_close'
                : 'sort_under under'
            }>
            <div>
                Sort Results By
            </div>
            <div>
                Sort
            </div>
        </div>
        </div >
    )
}

export default MoviesSort