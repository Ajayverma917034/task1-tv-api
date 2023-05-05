import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Loading from './Loading/Loading';
import { Box, Typography } from '@mui/material';
import Card from './Card';

const Home = () => {
    const [content, setContent] = useState([]);
    const fetchData = async () => {
        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=all`)
        setContent(data);
    }
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])
    return (
        <Fragment>
            {
                !content ?
                    <Loading />
                    :
                    <Fragment>
                        <Typography style={{ fontSize: '40px', fontWeight: '600', color: '#fff', textAlign: 'center', borderBottom: '2px solid #fff', }} className='productHeading'> All Shows </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                            {

                                content.map((item, index) => (
                                    <Card item={item} key={index} />
                                ))
                            }

                        </Box>
                    </Fragment>
            }



        </Fragment>
    )
}

export default Home