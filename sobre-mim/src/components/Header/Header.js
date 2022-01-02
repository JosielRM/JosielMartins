import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import {StyledToolbar} from "./styled"
import Button from '@material-ui/core/Button'
import {goToProjetos, goToSobreMim} from '../../routs/coordinator'
import { useHistory } from 'react-router-dom'


const Header = () => {
    const history = useHistory()
    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToProjetos(history)} color="inherit">Cookenu</Button>
                <Button onClick={() => goToSobreMim(history)} color="inherit">Login</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header 