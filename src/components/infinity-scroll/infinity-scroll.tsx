import React, {useEffect, useRef} from 'react';
import {useInView} from 'react-intersection-observer';
import './styles.scss';

interface InfinityScrollProps {
    loadMore: () => void;
    loadPrev: () => void;
    children: React.ReactNode;
}

export const InfinityScroll: React.FC<InfinityScrollProps> = ({ loadMore, children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [bottomRef, inViewBottom] = useInView({
        triggerOnce: false,
        rootMargin: '0px 0px 0px 0px',
    });

    useEffect(() => {
        if (inViewBottom) {
            loadMore();
        }
    }, [inViewBottom, loadMore]);

    return (
        <div ref={containerRef} className="infinity_scroll">
            <div>{children}</div>
            <div ref={bottomRef} style={{ height: '100px' }} /> {/* Adjust height based on your needs */}
        </div>
    );
};
