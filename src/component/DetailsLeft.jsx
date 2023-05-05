import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './details.css'
const unavailable = "Unavailable"
const StyledTypography = styled(Typography)`
margin-top: 12px;
display: flex;
padding: 15px;
border-radius: 20px;
box-shadow: inset 0 0 10px #fff;
text-align: justify;
font-size: 20px;
`

const ColumnText = styled(TableRow)`
    font-size: 14px;
        vertical-align: baseline;
    &>td{
        font-size: 14px;
        border: none;
    }
`
const colorStyle = {
    color: '#fff',
    display: 'flex'
}

const DetailsLeft = ({ details }) => {
    return (
        <Box style={{ color: '#fff', display: 'flex', flexDirection: 'column' }}>
            {
                details && <>

                    <Typography style={{ fontSize: '30px' }}>{details && details.name}</Typography>

                    <Table style={{ marginTop: '30px' }}>
                        <TableBody>
                            <ColumnText>
                                <TableCell style={{ color: '#fff' }}>Language</TableCell>
                                <TableCell style={colorStyle}>{details.language}</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{ color: '#fff' }}>Rating</TableCell>
                                <TableCell style={colorStyle}>{details.rating ? details.rating.average : unavailable} rating</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{ color: '#fff' }}>Status</TableCell>
                                <TableCell style={colorStyle}>{details.status}</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{ color: '#fff' }}>Type</TableCell>
                                <TableCell style={colorStyle}>{details.type}</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{ color: '#fff' }}>Genres</TableCell>
                                <TableCell style={colorStyle}>
                                    {
                                        details.genres && details.genres.map((item, index) => (
                                            <p key={item} style={{ marginRight: '10px' }}>{item}</p>

                                        ))

                                    }</TableCell>
                            </ColumnText>
                        </TableBody>

                    </Table>
                    {
                        details.status && details.status === 'Running' &&
                        <>
                            <Box style={{ display: 'flex', marginBottom: '20px' }}>
                                <Typography>You can watch it on &nbsp;</Typography>
                                {
                                    details.schedule.days.map((item, index) => (
                                        <Typography key={index}> {item} &nbsp;</Typography>
                                    ))

                                }
                                <Typography > at {details.schedule.time}</Typography>

                            </Box>
                        </>
                    }
                    <Link className='seeNowUrl' to={details.url && details.url}>See Now</Link>

                    <Link className='seeNowUrl' to={details.officialSite && details.officialSite}>Go on official website</Link>



                    <Typography marginTop={5} fontSize={22}>Description</Typography>
                    <StyledTypography>
                        {details.summary}
                    </StyledTypography>

                </>

            }
        </Box>
    )
}

export default DetailsLeft