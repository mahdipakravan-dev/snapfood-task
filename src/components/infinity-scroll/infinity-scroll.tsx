import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles.scss';

interface InfinityScrollProps {
    loadMore: () => Promise<void>;
    children: React.ReactNode;
}

export const InfinityScroll: React.FC<InfinityScrollProps> = ({ loadMore, children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [bottomRef, inViewBottom] = useInView({
        triggerOnce: false,
        rootMargin: '0px 0px 0px 0px',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!children) {
            return
        }
        const handleScroll = async () => {
            if (inViewBottom && !loading) {
                setLoading(true);
                await loadMore();
                setLoading(false);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [inViewBottom, loadMore, loading]);

    return (
        <div ref={containerRef} className="infinity_scroll" style={{ overflowY: 'auto', height : "600px"}}>
            <div>{children}</div>
            <div ref={bottomRef} style={{ height: '100px' }} />
        </div>
    );
};
