export const ALL_LANGUAGES = ['en-US', 'de']; // equal to the browser native language abbreviations

export type Language = typeof ALL_LANGUAGES[number];

export type LanguageData = {
    languageNames: string[];
    components: {
        hero: {
            heading: string;
            subHeading: string;
        };
        logo: {
            upperText: string;
            lowerText: string;
        };
        landing: {
            getInTouch: string;
        };
        about: {
            title: string;
            aboutParagraph: string | JSX.Element;
            birth: string;
            languages: string;
            leisure: string;
            programming: string;
            libraries: string;
        };
        experiences: {
            title: string;
            work: {
                title: string;
                steps: {
                    period: string;
                    headline: string;
                    position: string;
                    paragraph: JSX.Element | JSX.Element[] | string;
                }[];
            };
            education: {
                title: string;
                steps: {
                    period: string;
                    headline: string;
                    degree: string;
                    paragraph: JSX.Element | JSX.Element[] | string;
                }[];
            };
        };
        projects: {
            title: string;
            sections: {
                title: string;
                steps: {
                    headline: string;
                    icon: string; // octicon icon
                    iconText: string;
                    links: { name: string; href: string }[];
                    tags: string[];
                    content: string | JSX.Element | JSX.Element[];
                }[];
            }[];
        };
        contact: {
            title: string;
            requiredError: string;
            name: {
                label: string;
                placeholder: string;
            };
            email: {
                label: string;
                placeholder: string;
                wrongFormatError: string;
            };
            message: {
                label: string;
                placeholder: string;
            };
            privacyPolicy: string;
            submitButtonLabel: string;
        };
        snackbar: {
            errors: {
                formDataSubmissionFailed: string;
            };
            successes: {
                formDataSubmissionSucceeded: string;
            };
        };
        footer: {
            links: { name: string; href: string }[];
        };
        dataProtection: {
            back: string;
            title: string;
            content: string | JSX.Element | JSX.Element[];
        };
        cookieNotice: {
            noticeText: string;
            accept: string;
            acceptAll: string;
            readMore: string;
            requiredCookiesDescription: string;
            googleAnalyticsDescription?: string; // only needed if enabled
        };
    };
};

export const LANGUAGE_DATA: { [key in Language]: LanguageData } = {
    'en-US': {
        languageNames: ['EN', 'DE'],
        components: {
            hero: {
                heading: 'Elisabeth Smith',
                subHeading: 'Data Scientist. Postgraduate. Realist.',
            },
            cookieNotice: {
                accept: 'Accept',
                acceptAll: 'Accept all',
                readMore: 'Read more',
                noticeText: 'This website uses cookies to improve your experience.',
                requiredCookiesDescription: 'Required cookies for the delivery of the website',
                googleAnalyticsDescription: 'Cookies for improvements of the content',
            },
            logo: {
                upperText: 'Elisabeth',
                lowerText: 'Smith',
            },
            landing: {
                getInTouch: 'Get in touch',
            },
            about: {
                title: 'About',
                aboutParagraph: (
                    <>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet.
                    </>
                ),
                birth: 'birth',
                languages: 'languages',
                leisure: 'leisure',
                programming: 'programming',
                libraries: 'libraries and frameworks',
            },
            experiences: {
                title: 'Experiences',
                education: {
                    title: 'Education',
                    steps: [
                        {
                            degree: 'PhD',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                                    quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </>
                            ),
                            period: '01/2021 - now',
                        },
                        {
                            degree: 'Master of Engineering',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At
                                    accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor
                                    et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus
                                    sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                    sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                    labore et dolore magna aliquyam erat.
                                </>
                            ),
                            period: '01/2018 - 12/2019',
                        },
                        {
                            degree: 'Bachelor of Engineering',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
                                </>
                            ),
                            period: '03/2015 - 12/2017',
                        },
                        {
                            degree: 'High School Diploma',
                            headline: 'Highschool of Springfield',
                            paragraph: (
                                <>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit amet.
                                </>
                            ),
                            period: '08/2013 - 02/2015',
                        },
                    ],
                },
                work: {
                    title: 'Work',
                    steps: [
                        {
                            position: 'PhD student',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    Links are also possible:{' '}
                                    <a href="https://google.com" target="_blank" rel="noreferrer">
                                        Go to google.
                                    </a>
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                    iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                                    te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.
                                </>
                            ),
                            period: '01/2020 - now',
                        },
                        {
                            position: 'Student Assistant',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                    iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                                    te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.
                                </>
                            ),
                            period: '01/2019 - 12/2019',
                        },
                        {
                            position: 'Intern',
                            headline: 'Company ABC',
                            paragraph: (
                                <>
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                    iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                                    te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.
                                </>
                            ),
                            period: '07/2018 - 12/2018',
                        },
                    ],
                },
            },
            contact: {
                title: 'Contact',
                requiredError: 'This field is required',
                email: {
                    label: 'Email',
                    placeholder: 'Your Email *',
                    wrongFormatError: 'Enter a valid email address!',
                },
                message: {
                    label: 'Message',
                    placeholder: 'Your Message... *',
                },
                name: {
                    label: 'Name',
                    placeholder: 'Your Name *',
                },
                privacyPolicy: 'I agree to the privacy policy.',
                submitButtonLabel: 'Submit',
            },
            projects: {
                title: 'Projects & Publications',
                sections: [
                    {
                        steps: [
                            {
                                content: (
                                    <>
                                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                        lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                                        dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore
                                        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                        facilisi.
                                    </>
                                ),
                                headline: 'My awesome project',
                                icon: 'beaker',
                                iconText: '',
                                links: [
                                    {
                                        name: 'Link to Github',
                                        href: 'https://google.com',
                                    },
                                ],
                                tags: ['python'],
                            },
                            {
                                content: (
                                    <>
                                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                        lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                                        dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore
                                        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                        facilisi.
                                    </>
                                ),
                                headline: 'My awesome project',
                                icon: 'beaker',
                                iconText: '',
                                links: [
                                    {
                                        name: 'Link to Github',
                                        href: 'https://google.com',
                                    },
                                ],
                                tags: ['python'],
                            },
                            {
                                content: (
                                    <>
                                        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming
                                        id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                        consequat.
                                    </>
                                ),
                                headline: 'My awesome project',
                                icon: 'beaker',
                                iconText: '',
                                links: [
                                    {
                                        name: 'Link to Github',
                                        href: 'https://google.com',
                                    },
                                ],
                                tags: ['python'],
                            },
                        ],
                        title: 'Projects',
                    },
                    {
                        steps: [
                            {
                                content: (
                                    <>
                                        <p>Thomas Smith, Elisabeth Smith</p>
                                        <p>January 2021</p>
                                    </>
                                ),
                                headline: 'A really interesting publication',
                                icon: 'book',
                                iconText: 'Article',
                                links: [{ name: 'Link to article', href: 'https://google.com' }],
                                tags: ['Big data', 'AI'],
                            },
                        ],
                        title: 'Publications',
                    },
                ],
            },
            snackbar: {
                errors: {
                    formDataSubmissionFailed: 'Error while submitting your data. Please try again later.',
                },
                successes: {
                    formDataSubmissionSucceeded:
                        'Your information was submitted. You will receive a confirmation email.',
                },
            },
            footer: {
                links: [
                    {
                        href: 'https://google.com',
                        name: 'Some external link',
                    },
                ],
            },
            dataProtection: {
                back: 'Back',
                title: 'Data Protection',
                content: (
                    <>
                        <h2>Privacy Policy</h2>
                        <p>......</p>
                    </>
                ),
            },
        },
    },
    de: {
        languageNames: ['EN', 'DE'],
        components: {
            hero: {
                heading: 'Elisabeth Smith',
                subHeading: 'Data Scientist. Doktorandin. Realist.',
            },
            cookieNotice: {
                accept: 'Akzeptieren',
                acceptAll: 'Alle akzeptieren',
                readMore: 'Mehr erfahren',
                noticeText: 'Diese Webseite verwendet Cookies, um Ihr Nutzererlebnis zu optimieren.',
                requiredCookiesDescription: 'Erforderliche Cookies zur Bereitstellung der Webseite',
                googleAnalyticsDescription: 'Cookies zur Verbesserung der Inhalte',
            },
            logo: {
                upperText: 'Elisabeth',
                lowerText: 'Smith',
            },
            landing: {
                getInTouch: 'Kontaktieren Sie mich',
            },
            about: {
                title: 'Über mich',
                aboutParagraph: (
                    <>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet.
                    </>
                ),
                birth: 'Geburtstag',
                languages: 'Sprachen',
                leisure: 'Freizeit',
                programming: 'Programmierung',
                libraries: 'Bibliotheken und Frameworks',
            },
            experiences: {
                title: 'Erfahrung',
                education: {
                    title: 'Bildungsweg',
                    steps: [
                        {
                            degree: 'Doktor',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                                    quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </>
                            ),
                            period: '01/2021 - Heute',
                        },
                        {
                            degree: 'Master of Engineering',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At
                                    accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor
                                    et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus
                                    sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                    sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                    labore et dolore magna aliquyam erat.
                                </>
                            ),
                            period: '01/2018 - 12/2019',
                        },
                        {
                            degree: 'Bachelor of Engineering',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
                                </>
                            ),
                            period: '03/2015 - 12/2017',
                        },
                        {
                            degree: 'High School Diploma',
                            headline: 'Highschool of Springfield',
                            paragraph: (
                                <>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit amet.
                                </>
                            ),
                            period: '08/2013 - 02/2015',
                        },
                    ],
                },
                work: {
                    title: 'Arbeit',
                    steps: [
                        {
                            position: 'Doktorand',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    Links are also possible:{' '}
                                    <a href="https://google.com" target="_blank" rel="noreferrer">
                                        Go to google.
                                    </a>
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                    iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                                    te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.
                                </>
                            ),
                            period: '01/2020 - now',
                        },
                        {
                            position: 'Studentische Hilfskraft',
                            headline: 'University of Springfield',
                            paragraph: (
                                <>
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                    iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                                    te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.
                                </>
                            ),
                            period: '01/2019 - 12/2019',
                        },
                        {
                            position: 'Studentische Hilfskraft',
                            headline: 'Company ABC',
                            paragraph: (
                                <>
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                    iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                                    te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.
                                </>
                            ),
                            period: '07/2018 - 12/2018',
                        },
                    ],
                },
            },
            contact: {
                title: 'Kontakt',
                requiredError: 'Diese Eingabe ist erforderlich.',
                email: {
                    label: 'E-Mail',
                    placeholder: 'Ihre E-Mail *',
                    wrongFormatError: 'Bitte geben Sie eine valide E-Mail Adresse ein!',
                },
                message: {
                    label: 'Nachricht',
                    placeholder: 'Ihre Nachricht... *',
                },
                name: {
                    label: 'Name',
                    placeholder: 'Ihr Name *',
                },
                privacyPolicy: 'Ich akzeptiere die Datenschutzbestimmungen.',
                submitButtonLabel: 'Absenden',
            },
            projects: {
                title: 'Projekte & Publikationen',
                sections: [
                    {
                        steps: [
                            {
                                content: (
                                    <>
                                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                        lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                                        dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore
                                        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                        facilisi.
                                    </>
                                ),
                                headline: 'My awesome project',
                                icon: 'beaker',
                                iconText: '',
                                links: [
                                    {
                                        name: 'Link to Github',
                                        href: 'https://google.com',
                                    },
                                ],
                                tags: ['python'],
                            },
                            {
                                content: (
                                    <>
                                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                        lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                                        dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore
                                        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                        facilisi.
                                    </>
                                ),
                                headline: 'My awesome project',
                                icon: 'beaker',
                                iconText: '',
                                links: [
                                    {
                                        name: 'Link to Github',
                                        href: 'https://google.com',
                                    },
                                ],
                                tags: ['python'],
                            },
                            {
                                content: (
                                    <>
                                        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming
                                        id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                        consequat.
                                    </>
                                ),
                                headline: 'My awesome project',
                                icon: 'beaker',
                                iconText: '',
                                links: [
                                    {
                                        name: 'Link to Github',
                                        href: 'https://google.com',
                                    },
                                ],
                                tags: ['python'],
                            },
                        ],
                        title: 'Projekte',
                    },
                    {
                        steps: [
                            {
                                content: (
                                    <>
                                        <p>Thomas Smith, Elisabeth Smith</p>
                                        <p>January 2021</p>
                                    </>
                                ),
                                headline: 'A really interesting publication',
                                icon: 'book',
                                iconText: 'Artikel',
                                links: [{ name: 'Link zum Artikel', href: 'https://google.com' }],
                                tags: ['Big data', 'AI'],
                            },
                        ],
                        title: 'Publikationen',
                    },
                ],
            },
            snackbar: {
                errors: {
                    formDataSubmissionFailed: 'Fehler beim Senden Ihrer Daten. Bitte versuchen Sie es später erneut.',
                },
                successes: {
                    formDataSubmissionSucceeded:
                        'Ihre Nachricht wurde übermittelt. Sie erhalten in Kürze eine Bestätigung per E-Mail.',
                },
            },
            footer: {
                links: [
                    {
                        href: 'https://google.com',
                        name: 'Some external link',
                    },
                ],
            },
            dataProtection: {
                back: 'Zurück',
                title: 'Datenschutz',
                content: (
                    <>
                        <h2>Datenschutzerklärung</h2>
                        <p>......</p>
                    </>
                ),
            },
        },
    },
};
