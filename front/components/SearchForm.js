import React, { useCallback } from 'react';
import { Input } from "antd";
import useInput from '../hooks/useInput';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


function SearchForm() {
    const router = useRouter();
    const [searchWord, onChangeSearchWord] = useInput('');
    const { searchPostsLoading } = useSelector((state) => state.post);
    const { me } = useSelector((state) => state.user);

    const onSearch = useCallback(() => {
        console.log("검색 버튼 클릭 ");
        // router.push(`/search/post/${searchWord}`); => front\pages\search\post\[search_word].js
        router.push(`/search/post/${searchWord}`);
    }, [searchWord]);

    return (
        <div>
            <Input.Search
                enterButton style={{ verticalAlign: 'middle' }}
                onChange={onChangeSearchWord}
                onSearch={onSearch}
                loading={searchPostsLoading}
            />
        </div>
    )
}

export default SearchForm
