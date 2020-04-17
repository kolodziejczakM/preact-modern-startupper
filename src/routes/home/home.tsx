import { h, VNode } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper } from './home.styles';
import { Button } from '@/common/components/Button';

interface Photo {
    thumbnailUrl: string;
    title: string;
}

export const Home: TypedComponent<Props> = () => {
    const [limit, setLimit] = useState(2);
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                });
        }, 2000);
    }, [limit]);

    return (
        <Wrapper>
            <div>
                <h1>Testing pre-rendering</h1>
            </div>
            <div>
                <Button
                    onClick={(): void => {
                        setLimit(limit => limit + 2);
                    }}
                >
                    Load more
                </Button>
            </div>
            <ul>
                {data.map(
                    (photo: Photo): VNode => (
                        <li key={photo.thumbnailUrl}>
                            <figure>
                                <img
                                    src={photo.thumbnailUrl}
                                    alt={photo.title}
                                />
                                <figcaption>{photo.title}</figcaption>
                            </figure>
                        </li>
                    )
                )}
            </ul>
        </Wrapper>
    );
};

interface Props {}

Home.propTypes = {};
