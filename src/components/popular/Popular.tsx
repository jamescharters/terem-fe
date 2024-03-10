import { TileItem } from "@/types/TileItem";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import Styles from "./Popular.module.scss";
import { PopularItem } from "./PopularItem";

export type FeaturedProps = {
    items: TileItem[];
};

export const Featured: React.FC<FeaturedProps> = (props) => {
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes());
        }
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi)
            emblaApi.on("settle", () => {
                setCanScrollPrev(emblaApi.canScrollPrev());
                setCanScrollNext(emblaApi.canScrollNext());
            });
    }, [emblaApi]);

    return (
        <section className={Styles.container}>
            <h3 data-testid="heading-popular-items">Popular around you</h3>
            {props.items.length === 0 ? (
                <p>Sorry, no items matched your search.</p>
            ) : (
                <div className={Styles.embla}>
                    {canScrollPrev && (
                        <button className={Styles.embla__prev} onClick={scrollPrev} data-testid="button-carousel-previous">
                            <FontAwesomeIcon icon={faChevronLeft} size="1x" />
                        </button>
                    )}
                    <div className={Styles.embla__viewport} ref={emblaRef}>
                        <div className={Styles.embla__container}>
                            {props.items.map((item) => (
                                <PopularItem key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                    {canScrollNext && (
                        <button className={Styles.embla__next} onClick={scrollNext} data-testid="button-carousel-next">
                            <FontAwesomeIcon icon={faChevronRight} size="1x" />
                        </button>
                    )}
                </div>
            )}
        </section>
    );
};

export default Featured;
