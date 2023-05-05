
// import { img_300, unavailable } from "../../config/config.js"
import { Box, Typography } from "@mui/material"
import React from 'react'
import Badge from '@mui/material/Badge';
import { addEllipsis } from "./utils/ellipse.js";
import { Link } from "react-router-dom";
import { noPicture } from "./constant/config.js";

const Card = ({ item }) => {

    return (
        <Link style={{ textDecoration: 'none', margin: '15px', marginTop: '20px', background: '#fff', borderRadius: '10px', paddingBottom: '10px' }} to={`show/${item.show.id}`}>

            <Badge badgeContent={item.show.rating.average} color={item.show.rating.average > 6 ? "primary" : "secondary"} style={{
                position: 'absolute', marginLeft: '205px'
            }} />
            <img src={item.show.image ? item.show.image.medium : noPicture} alt={item.show.name} style={{ borderRadius: 10, width: '200px', }} />
            <Box style={{ bottom: '0px' }}>
                <Typography style={{ fontSize: '20px', color: '#000', paddingLeft: '10px' }}>{addEllipsis(item.show.name)}</Typography>

                <Typography style={{ fontSize: '18px', color: '#000', paddingLeft: '10px' }}>{item.show.premiered}</Typography>

            </Box>

        </Link>

    )
}

export default Card