import { Fragment, h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { useContext } from 'preact/hooks';
import i18n from '@/modules/localisation/i18n';
import { LocalisationContext } from '@/modules/localisation/localisation.context';

export const Text: TypedComponent<Props> = ({
    children,
    withMarkup,
}: Props): VNode<string> => {
    useContext(LocalisationContext);

    return withMarkup ? (
        <span
            className="sanitized-translation"
            dangerouslySetInnerHTML={{
                __html: i18n._(children), // In case this option is used - add sanitization library e.g. 'dompurify'
            }}
        />
    ) : (
        <Fragment>{i18n._(children)}</Fragment>
    );
};

interface Props {
    children: string;
    withMarkup?: boolean;
}

Text.propTypes = {
    children: PropTypes.string.isRequired,
    withMarkup: PropTypes.bool,
};

Text.defaultProps = {
    withMarkup: false,
};
