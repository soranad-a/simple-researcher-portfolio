export type Level = 'primary' | 'secondary' | 'tertiary' | 'light';

export const PALETTE: { [key in Level]: string } = {
    primary: '#153E5B', // main color
    secondary: '#3F7DA6', // secondary color
    tertiary: '#EC5241', // contrast
    light: '#BED6E5', // main font color
};

export const APP_NAME = 'My Portfolio';

export const PERSONAL_DATA = {
    birthDate: '2000-01-01',
    languages: ['english'],
    leisures: ['programming', 'crypto currencies', 'running'],
    programming: ['python', 'javascript'],
    libraries: ['numpy', 'numba'],
};

export const ANALYTICS_ELEMENT: JSX.Element | null = <></>;
