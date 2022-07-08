import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import sortAction from '../redux/action/sortAction'

const MoviesSort = () => {

    let [close, setClose] = useState(true);
    let [sortText, setSortText] = useState("sort");
    let [buttonToggle, setButtonToggle] = useState(false);
    let dispatch = useDispatch();

    function selectButton(event) {
        setButtonToggle(false);
        setSortText(event.target.innerText);
        dispatch(sortAction(event.target.attributes[1].value));
    }

    return (
        <div className={close
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
                <div className='sort_button_wrap'>
                    <button className='sort_button' onClick={() => setButtonToggle(true)}>{sortText}</button>
                    <div className={buttonToggle ? "button_list_on button_list" : "button_list_off"}>
                        <ul>
                            <li className="sort_list" onClick={selectButton} value="">none</li>
                            <li className="sort_list" onClick={selectButton} value="popularity.desc">popularity(Desc)</li>
                            <li className="sort_list" onClick={selectButton} value="popularity.asc">popularity(Asc)</li>
                            <li className="sort_list" onClick={selectButton} value="release_date.desc">Release Day(Desc)</li>
                            <li className="sort_list" onClick={selectButton} value="release_date.asc">Release Day(Asc)</li>
                            <li className="sort_list" onClick={selectButton} value="vote_average.desc">Vote(Desc)</li>
                            <li className="sort_list" onClick={selectButton} value="vote_average.asc">Vote(Asc)</li>
                            <li className="sort_list" onClick={selectButton} value="revenue.desc">Revenue(Desc)</li>
                            <li className="sort_list" onClick={selectButton} value="revenue.asc">Revenue(Asc)</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MoviesSort