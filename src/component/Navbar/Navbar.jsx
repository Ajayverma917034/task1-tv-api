import * as React from 'react';

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Button, Tooltip, MenuItem, Container, Badge } from '@mui/material'
import Search from '@mui/icons-material/Search';
import SearchBar from './SearchBar';
import { Close } from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
const pages = ['Home', 'T.V.', 'About'];


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (index) => {

        switch (index) {
            case 0:
                navigate("/")
                break;

            case 1:
                navigate('/tv')
                break;
            case 2:
                navigate('/about')
                break;
            case 3:
                navigate('/products')
                break;
            default:
                navigate("/")
        }
        setAnchorElNav(null);
    };
    const handleOpenSearch = () => {
        setOpen(!open)
    }
    const MenuClick = (page) => {

        handleCloseNavMenu()

    }


    return (
        <AppBar position="static" style={{ background: '#000', boxShadow: '0 0 30px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>


                    {/* logo */}
                    <Link to={'/'}>
                        <Tooltip title='My T.V.' >
                            <Box sx={{ cursor: 'pointer' }}>
                                <img src='https://static.vecteezy.com/system/resources/previews/007/688/855/original/tv-logo-free-vector.jpg' alt='Company name' style={{ width: '50px' }} />
                            </Box>
                        </Tooltip>
                    </Link>

                    {/* nav item for md screen */}

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto', alignItems: 'center' }}>
                        {
                            open && <SearchBar />
                        }
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenSearch}
                            color="inherit"
                        >{
                                open ? <Close /> : <Search />
                            }

                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },

                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu(index)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>

                    {/* nav item for large screen */}




                    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto', alignItems: 'center', color: "#fff" }}>
                        <SearchBar />
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => handleCloseNavMenu(index)}
                                sx={{ my: 2, color: '#fff', display: 'block' }}
                                style={{ color: '#fff' }}                            >
                                {page}
                            </Button>
                        ))}
                    </Box>



                    {/* user avtar  */}

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
