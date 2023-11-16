import { useState } from 'react';

type Status = 'idle' | 'pending' | 'resolved' | 'rejected';

export const usePromise = <Req = unknown,Res = unknown>(promiseFn: (payload : Req) => Promise<Res>) => {
    const [status, setStatus] = useState<Status>('idle');
    const [data, setData] = useState<Res | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const execute = async (payload : Req) => {
        setStatus('pending');
        setData(null);
        setError(null);

        try {
            const result = await promiseFn(payload);
            setData(result);
            setStatus('resolved');
            return result
        } catch (err) {
            setError(err as Error);
            setStatus('rejected');
            return err
        }
    };

    return { status, data, error, execute };
};