/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Particles, { DestroyMode, MoveDirection, OutMode } from 'react-tsparticles';
import { PALETTE } from 'services/const/AppConstants';

const getStyles = () => {
    return {
        wrapper: css`
            width: 100%;
            opacity: 0.5;
        `,
    };
};

export const Background = (): JSX.Element => {
    const styles = getStyles();
    return (
        <Particles
            css={styles.wrapper}
            id="tsparticles"
            options={{
                fpsLimit: 60,
                zLayers: 1,
                background: {
                    color: PALETTE.primary,
                    repeat: 'no-repeat',
                    opacity: 1,
                    size: 'cover',
                },
                fullScreen: {
                    enable: true,
                    zIndex: 1,
                },
                interactivity: {
                    detectsOn: 'window',
                    events: {
                        onClick: {
                            enable: false,
                        },
                        onDiv: {
                            enable: false,
                        },
                        onHover: {
                            enable: true,
                            mode: 'grab',
                            parallax: {
                                enable: false,
                                force: 20,
                                smooth: 20,
                            },
                        },
                        resize: false,
                    },
                    modes: {
                        grab: {
                            distance: 250,
                            lineLinked: {
                                opacity: 0.1,
                                blink: false,
                                consent: false,
                                color: PALETTE.light,
                            },
                        },
                        push: {
                            default: true,
                            quantity: 4,
                        },
                        connect: {
                            distance: 250,
                            links: {
                                opacity: 0.25,
                            },
                            radius: 60,
                        },
                    },
                },
                manualParticles: [],
                motion: {
                    disable: false,
                    reduce: {
                        factor: 4,
                        value: true,
                    },
                },
                particles: {
                    color: {
                        value: PALETTE.light,
                    },
                    links: {
                        color: PALETTE.light,
                        distance: 200,
                        enable: true,
                        opacity: 0.25,
                        width: 3,
                    },
                    collisions: {
                        enable: false,
                    },
                    destroy: {
                        mode: DestroyMode.none,
                    },
                    move: {
                        direction: MoveDirection.none,
                        enable: true,
                        outMode: OutMode.bounce,
                        random: false,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 1500,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0,
                    },
                },
                detectRetina: true,
                duration: 0,
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                autoPlay: true,
            }}
        />
    );
};
