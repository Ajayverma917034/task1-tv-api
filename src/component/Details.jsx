import { Container, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading/Loading'
import DetailsLeft from './DetailsLeft'
import { noPicLarge } from './constant/config'

const Details = () => {
    const [details, setDetails] = useState({})
    const { id } = useParams()
    const getdetailed = async () => {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
        setDetails(data);
    }
    useEffect(() => {
        getdetailed();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            {
                !Boolean(details) ? <Loading /> :
                    <Container style={{ marginTop: '30px' }}>
                        <Grid container>
                            <Grid item xm={12} sm={12} md={12} lg={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={details.image ? details.image.original : noPicLarge} alt={details.name} className='imageView' />
                            </Grid>
                            <Grid item xm={12} sm={12} md={12} lg={6}>
                                <DetailsLeft details={details} />
                            </Grid>

                        </Grid>
                    </Container>
            }
        </>
    )
}

export default Details