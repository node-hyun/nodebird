import { useState, useCallback } from 'react';

// 동일한 구조의 onChange 함수를 여러번 만들어야 되는 경우 대신 사용 가능
export default (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, handler, setter];
};