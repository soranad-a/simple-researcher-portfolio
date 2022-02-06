/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext, useEffect, useState } from 'react';
import { PALETTE } from 'services/const/AppConstants';
import { Button } from 'components/shared/Button';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import LanguageContext from 'services/context/Language/LanguageContext';
import SnackbarContext from 'services/context/Snackbar/SnackbarContext';
import { Link } from 'react-router-dom';
import { SectionWrapper } from './SectionWrapper';

const getStyles = () => {
    return {
        asterix: css`
            color: ${PALETTE.tertiary},
            font-weight: 600,
        `,
        inputWrapper: css`
            display: flex;
            justify-content: space-between;

            @media (max-width: 600px) {
                display: block;
            }
        `,
        inputLeft: css`
            flex-grow: 1;
            flex-basis: 0;
            margin-right: 5px;

            @media (max-width: 600px) {
                margin: 0;
            }
        `,
        inputRight: css`
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 5px;

            @media (max-width: 600px) {
                margin: 15px 0 0 0;
            }
        `,
        textAreaInput: css`
            margin: 10px 0 0 0;
            resize: vertical;
        `,
        inputElement: css`
            position: relative;
            z-index: 10;
            width: 100%;
            padding: 10px;
            background-color: ${PALETTE.secondary};
            border: none;
            border-radius: 3px;
            color: ${PALETTE.primary};
            transition-duration: 0.2s;
            font-family: inherit;
            font-size: inherit;
            box-sizing: border-box;
            &:focus-visible {
                outline: none;
                border: none;
                filter: brightness(0.9);
            }
            &:hover {
                filter: brightness(0.9);
            }
            &::placeholder {
                color: ${PALETTE.primary + '80'};
            }
        `,
        submitRow: css`
            width: 100%;
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            @media (max-width: 600px) {
                display: block;
                margin-top: 15px;
            }
        `,
        submitInputFields: css`
            display: flex;
            align-items: center;
            margin-left: 10px;
            justify-content: flex-end;

            @media (max-width: 600px) {
                margin-left: 0;
                margin-top: 15px;
            }
        `,
        privacyCheckbox: css`
            cursor: pointer;
            background-color: ${PALETTE.secondary};
            width: 20px;
            height: 20px;
            border-radius: 3px;
            appearance: none;
            margin-right: 5px;
            transition-duration: 0.1s;
            &:hover {
                filter: brightness(0.9);
            }
            &:before {
            }
            &:checked {
                width: 10px;
                height: 15px;
                margin: -4px 10px 0 0;
                border-radius: 0px;
                background: none;
                border: 3px solid ${PALETTE.secondary};
                border-width: 0 3px 3px 0;
                transform: rotate(45deg);
            }
            &:after {
                background-color: none;
                border-color: ${PALETTE.secondary}
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
            }
            
        `,
        privacyLabel: css`
            margin-right: 10px;
            flex-shrink: 2;
            max-width: 60%;
        `,
        errorBox: css`
            position: relative;
            font-size: 12px;
            margin-top: 5px;
            min-height: 15px;
            color: ${PALETTE.tertiary};
        `,
    };
};

const isEmail = (email: string): boolean => {
    const regex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);
    return regex.test(email);
};

const Contact = (): JSX.Element => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [formFulfilled, setFormFulfilled] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [recaptchaResponse, setrecaptchaResponse] = useState<null | string>(null);
    const recaptchaSiteKey = process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKEY || '';
    const styles = getStyles();
    const recaptchaRef = React.createRef<ReCAPTCHA>();
    const { showSnackbar } = useContext(SnackbarContext);
    const { contact, snackbar, dataProtection } = useContext(LanguageContext).currentLanguageData.components;
    const activeLanguage = useContext(LanguageContext).language;

    const emptyForm = () => {
        setName('');
        setEmail('');
        setMessage('');
        setPrivacyAccepted(false);
    };

    useEffect(() => {
        if (
            name !== '' &&
            email !== '' &&
            message !== '' &&
            privacyAccepted &&
            isEmail(email) &&
            recaptchaResponse !== null &&
            recaptchaResponse !== ''
        ) {
            setFormFulfilled(true);
        } else {
            setFormFulfilled(false);
        }
    }, [name, email, message, privacyAccepted, recaptchaResponse]);

    const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        event.preventDefault();
        if (process.env.REACT_APP_BACKEND_URL && recaptchaRef.current) {
            try {
                await axios.post(
                    `${process.env.REACT_APP_BACKEND_URL}/email`,
                    {
                        email: email,
                        name: name,
                        message: message,
                        language: activeLanguage,
                        recaptcha: { response: recaptchaResponse },
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        proxy: {
                            host: 'localhost',
                            port: 3001,
                        },
                    },
                );
                emptyForm();
                showSnackbar('Success', snackbar.successes.formDataSubmissionSucceeded, true);
            } catch {
                showSnackbar('Error', snackbar.errors.formDataSubmissionFailed, true);
            }
        } else {
            showSnackbar('Error', snackbar.errors.formDataSubmissionFailed, true);
        }
    };

    return (
        <SectionWrapper id="contact-section" headline={`4 ${contact.title}`}>
            <form>
                <div css={styles.inputWrapper}>
                    <div css={styles.inputLeft}>
                        <input
                            type="text"
                            name="name"
                            placeholder={contact.name.placeholder}
                            value={name}
                            onChange={(event) => {
                                if (nameError != '' && event.currentTarget.value != '') {
                                    setNameError('');
                                }
                                setName(event.currentTarget.value);
                            }}
                            onBlur={() => {
                                if (name == '') {
                                    setNameError(contact.requiredError);
                                } else {
                                    setNameError('');
                                }
                            }}
                            css={styles.inputElement}
                        />
                        <div css={styles.errorBox}>{nameError}</div>
                    </div>
                    <div css={styles.inputRight}>
                        <input
                            type="email"
                            name="email"
                            placeholder={contact.email.placeholder}
                            value={email}
                            onChange={(event) => {
                                if (emailError != '' && isEmail(event.currentTarget.value)) {
                                    setEmailError('');
                                }
                                setEmail(event.currentTarget.value);
                            }}
                            onBlur={() => {
                                if (isEmail(email)) {
                                    setEmailError('');
                                } else {
                                    setEmailError(contact.email.wrongFormatError);
                                }
                            }}
                            css={styles.inputElement}
                        />
                        <div css={styles.errorBox}>{emailError}</div>
                    </div>
                </div>
                <textarea
                    name="message"
                    placeholder={contact.message.placeholder}
                    rows={4}
                    value={message}
                    onChange={(event) => {
                        if (messageError != '' && event.currentTarget.value != '') {
                            setMessageError('');
                        }
                        setMessage(event.currentTarget.value);
                    }}
                    onBlur={() => {
                        if (message == '') {
                            setMessageError(contact.requiredError);
                        } else {
                            setMessageError('');
                        }
                    }}
                    css={css`
                        ${styles.inputElement};
                        ${styles.textAreaInput};
                    `}
                />
                <div css={styles.errorBox}>{messageError}</div>
                <div css={styles.submitRow}>
                    <div>
                        <ReCAPTCHA
                            sitekey={recaptchaSiteKey}
                            ref={recaptchaRef}
                            hl={activeLanguage.toLowerCase()}
                            theme="light"
                            onChange={() => {
                                setrecaptchaResponse(recaptchaRef.current ? recaptchaRef.current.getValue() : null);
                            }}
                        />
                    </div>
                    <div css={styles.submitInputFields}>
                        <input
                            type="checkbox"
                            id="privacy-policy-check"
                            name="privacy-policy-check"
                            css={styles.privacyCheckbox}
                            checked={privacyAccepted}
                            onChange={(event) => setPrivacyAccepted(event.target.checked)}
                        />
                        <label htmlFor="privacy-policy-check" css={styles.privacyLabel}>
                            {`* ${contact.privacyPolicy}`} (<Link to="/data-protection">{dataProtection.title}</Link>)
                        </label>
                        <Button
                            level="tertiary"
                            label={contact.submitButtonLabel}
                            disabled={!formFulfilled}
                            onClick={onSubmit}
                        />
                    </div>
                </div>
            </form>
        </SectionWrapper>
    );
};

export default Contact;
