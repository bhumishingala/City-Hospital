import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

function Alert(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const alert = useSelector(state => state.alert);

    console.log(alert);
    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
        }
    }, [alert.text])



    return (
        <div>

        </div>
    );
}

export default Alert;