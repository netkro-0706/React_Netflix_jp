import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const MoviesFilter = () => {

    let [close, setClose] = useState(true);
    const { genreList } = useSelector((state) => state.movie);

    const [year_value, setYear_value] = useState([0, 10]);
    const [score_value, setScore_value] = useState([0, 10]);

    const yearHandleChange = (event, newValue) => {
        setYear_value(newValue);
    };
    const scoreHandleChange = (event, newValue) => {
        setScore_value(newValue);
    };

    const theme = createTheme({
        palette: {
            red: {
                main: "#d50000",
            },
        },
    });

    console.log("genreList", genreList);


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
                            />
                        </ThemeProvider>
                    </Box>
                </div>
                <div className='score_filter under'>
                    <div>IBM Score Filter</div>
                    <div>From:{score_value[0]}-To:{score_value[1]}</div>
                    <Box sx={{ width: 200 }} className="filter_range">
                        <ThemeProvider theme={theme}>
                            <Slider
                                value={score_value}
                                onChange={scoreHandleChange}
                                valueLabelDisplay="auto"
                                color="red"
                            />
                        </ThemeProvider>
                    </Box>
                </div>
                <div className='genres_filter under'>
                    <div>Genres</div>
                    {genreList.map((item) => (
                        <button className='genres_button'>{item.name}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoviesFilter