import { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '~/assets/styles/grid.css';

const Items = memo(({ data }) => {
    const { name, itemS } = data;

    const img = itemS.slice(itemS.lastIndexOf('/'));

    return (
        <div className="column l-2 mobile-12">
            <div className="theme-item-wrapper">
                <div className="card-theme">
                    <div className="theme-image">
                        <figure className="image">
                            <LazyLoadImage visibleByDefault={itemS === img} effect={'blur'} src={itemS} alt={name} />
                        </figure>
                    </div>

                    <div className="card-content">
                        <h4 className="card-content-title">{name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
});

function ThemeItem({ item }) {
    const { items, title } = item;
    return (
        <>
            <h3 className=" theme-item-title">{title}</h3>
            <div className="theme-list-item">
                {items.map((e, index) => (
                    <Items key={index} data={e} />
                ))}
            </div>
        </>
    );
}

export default memo(ThemeItem);
