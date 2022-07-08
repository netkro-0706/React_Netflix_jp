import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux/es/exports';
import { filterAction } from "../redux/action/filteringAction"

const MoviesFilter = () => {

    let [close, setClose] = useState(true);
    const { genreList } = useSelector((state) => state.movie);
    let dispatch = useDispatch();
    const [year_value, setYear_value] = useState([1990, 2022]);

    const yearHandleChange = (event, newValue) => {
        setYear_value(newValue);
        dispatch(filterAction.year_filter(year_value));
    };

    const theme = createTheme({
        palette: {
            red: {
                main: "#d50000",
            },
        },
    });

    return (
        <div className={close
            ? 'filter_wrap_close remote_wrap'
            : 'filter_wrap remote_wrap'
        }>
            <div className='filter_top top'>
                <span>Filter</span>
                {close
                    ? <span onClick={() => { setClose(false) }}><FontAwesomeIcon icon={faArrowRight} /></span>
                    : <span onClick={() => { setClose(true) }}><FontAwesomeIcon icon={faArrowDown} /></span>
                }

            </div>
            <div className={close
                ? 'filter_under_close'
                : 'filter_under'
            }>
                <div className='year_filter under'>
                    <div>YEAR Filter</div>
                    <div>From:{year_value[0]}-To:{year_value[1]}</div>
                    <Box sx={{ width: 200 }} className="filter_range">
                        <ThemeProvider theme={theme}>
                            <Slider
                                value={year_value}
                                onChange={yearHandleChange}
                                valueLabelDisplay="auto"
                                color="red"
                                min={1990}
                                max={2022}
                            />
                        </ThemeProvider>
                    </Box>
                </div>
                <div className='genres_filter under'>
                    <div>Genres</div>
                    {genreList.map((item) => (
                        <button className='genres_button' onClick={(event)=>{dispatch(filterAction.genre_filter(event.target.innerHTML))}}>
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoviesFilter