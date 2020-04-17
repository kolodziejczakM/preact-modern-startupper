import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper } from './aboutMe.styles';

export const AboutMe: TypedComponent<Props> = () => (
    <Wrapper>About me page</Wrapper>
);

interface Props {}

AboutMe.propTypes = {};
