import { createContext, useEffect, useState } from 'react';

export type SnackbarType = 'Error' | 'Warning' | 'Success';
type SnackbarChildren = string | JSX.Element | JSX.Element[];

type SnackbarContextType = {
    visible: boolean;
    showSnackbar: (type: SnackbarType, children: SnackbarChildren, closeable: boolean) => void;
    type: SnackbarType;
    children: SnackbarChildren;
    closeSnackbar: () => void;
    closeable: boolean;
};

const SnackbarContext = createContext<SnackbarContextType>({
    visible: false,
    showSnackbar: () => null,
    closeSnackbar: () => null,
    type: 'Success',
    children: '',
    closeable: true,
});

export default SnackbarContext;

// use the context with const { ... } = useContext(LanguageContext).currentLanguageData
export const SnackbarProvider = (props: { children: JSX.Element }): JSX.Element => {
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState<SnackbarType>('Success');
    const [closeable, setCloseable] = useState(true);
    const [children, setChildren] = useState<SnackbarChildren>('');

    useEffect(() => {
        if (visible) {
            setInterval(() => {
                setVisible(false);
            }, 10000);
        }
    }, [visible]);

    const showSnackbar = (type: SnackbarType, children: SnackbarChildren, closeable = true): void => {
        setVisible(true);
        setCloseable(closeable);
        setType(type);
        setChildren(children);
    };

    const closeSnackbar = (): void => {
        setVisible(false);
    };

    return (
        <SnackbarContext.Provider
            value={{
                visible,
                showSnackbar,
                closeSnackbar,
                type,
                children,
                closeable,
            }}
        >
            {props.children}
        </SnackbarContext.Provider>
    );
};
