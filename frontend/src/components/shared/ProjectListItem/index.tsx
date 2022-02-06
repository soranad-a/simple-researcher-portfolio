/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BookIcon, CodeIcon, CodespacesIcon, GraphIcon, TerminalIcon, WorkflowIcon } from '@primer/octicons-react';
import { Chip } from 'components/shared/Chip';
import { PALETTE } from 'services/const/AppConstants';

type ProjectListItemProps = {
    headline: string;
    description: string | JSX.Element | JSX.Element[];
    tags: string[];
    links: {
        name: string;
        href: string;
    }[];
    icon: string;
    iconText: string;
};

const getStyles = () => {
    return {
        wrapper: css`
            display: flex;
            margin: 20px 0;
            align-items: center;
        `,
        fileWrapper: css`
            background-color: rgba(1, 1, 1, 0.25);
            margin-right: 20px;
            height: 100px;
            min-width: 75px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        `,
        title: css`
            text-transform: uppercase;
            margin: 10px 0;
        `,
        iconText: css`
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
            text-align: center;
        `,
        tags: css`
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
        `,
        links: css`
            margin-top: 10px;
        `,
        contentWrapper: css`
            background-color: ${PALETTE.secondary + 30};
            padding: 10px;
            border-radius: 3px;
            width: 100%;
        `,
    };
};

const getIcon = (iconText: string, size = 42): JSX.Element => {
    switch (iconText) {
        case 'finance':
            return <GraphIcon size={size}></GraphIcon>;
        case 'book':
            return <BookIcon size={size}></BookIcon>;
        case 'code':
            return <TerminalIcon size={size}></TerminalIcon>;
        case 'iot':
            return <CodespacesIcon size={size}></CodespacesIcon>;
        case 'flow':
            return <WorkflowIcon size={size}></WorkflowIcon>;
        default:
            return <CodeIcon size={size}></CodeIcon>;
    }
};

export const ProjectListItem = (props: ProjectListItemProps): JSX.Element => {
    const styles = getStyles();

    const tags = props.tags.map((tagName, index) => {
        return <Chip key={index}>{tagName}</Chip>;
    });

    const links = props.links.map((link, index) => {
        return (
            <a href={link.href} target="_blank" key={index} rel="noreferrer">
                &gt; {link.name}
            </a>
        );
    });

    return (
        <div css={styles.wrapper}>
            <div css={styles.fileWrapper}>
                {getIcon(props.icon)}
                <span css={styles.iconText}>{props.iconText}</span>
            </div>
            <div css={styles.contentWrapper}>
                <h4 css={styles.title}>{props.headline}</h4>
                <div>{props.description}</div>
                <div css={styles.tags}>{tags}</div>
                <div css={styles.links}>{links}</div>
            </div>
        </div>
    );
};
