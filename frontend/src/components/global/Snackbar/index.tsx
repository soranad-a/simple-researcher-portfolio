/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { XIcon } from '@primer/octicons-react';
import { useContext } from 'react';
import { PALETTE } from 'services/const/AppConstants';
import SnackbarContext, { SnackbarType } from '../../../services/context/Snackbar/SnackbarContext';

const getBackgroundColor = (type: SnackbarType): string => {
    switch (type) {
        case 'Error':
            return '#ed475b';
        case 'Success':
            return '#70cc5c';
        case 'Warning':
            return '#ffd359';
        default:
            return PALETTE.light;
    }
};

const getStyles = (type: SnackbarType) => {
    return {
        wrapper: css`
            position: fixed;
            bottom: 10px;
            left: 10px;
            border-radius: 5px;
            padding: 10px;
            background-color: ${getBackgroundColor(type)};
            color: ${PALETTE.primary};
            transition-duration: 0.2s; // TODO
        `,
        iconWrapper: css`
            text-align: right;
            margin-bottom: 10px;
            cursor: pointer;
        `,
    };
};

const Snackbar = (): JSX.Element | null => {
    const { children, closeable, closeSnackbar, visible, type } = useContext(SnackbarContext);
    const styles = getStyles(type);

    if (visible) {
        return (
            <div css={styles.wrapper}>
                {closeable && (
                    <div css={styles.iconWrapper} onClick={closeSnackbar}>
                        <XIcon size={16} />
                    </div>
                )}
                <div>{children}</div>
            </div>
        );
    } else {
        return null;
    }
};

export default Snackbar;
