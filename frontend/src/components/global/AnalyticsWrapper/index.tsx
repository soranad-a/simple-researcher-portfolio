import { ANALYTICS_ELEMENT, APP_NAME } from 'services/const/AppConstants';

export const AnalyticsWrapper = (): JSX.Element | null => {
    if (window.localStorage.getItem(APP_NAME.replaceAll(' ', '') + '-analyticsAccepted') == 'true') {
        return ANALYTICS_ELEMENT;
    } else {
        return null;
    }
};
