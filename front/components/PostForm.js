import React, { useCallback, useEffect, useRef } from 'react'
import useInput from '../hooks/useInput';
import { TweetForm, TweetButton, TweetTextArea } from "./style/PostFormStyle.js";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "antd";
// import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../reducers/post';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';


function PostForm() {
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput("");
    const imageInput = useRef();
    const { addPostLoading, addPostDone, imagePaths } = useSelector((state) => state.post);

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요.');
        }

        // 폼데이터 객체에 이미지와 텍스트 정보를 설정 한뒤 
        const formData = new FormData();
        imagePaths.forEach((p) => {
            formData.append('image', p);
        });
        formData.append('content', text);

        // 액션 data로 설정
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });

    }, [text, imagePaths]);


    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onChangeImages = useCallback((e) => {
        console.log('images : ', e.target.files);

        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        });

        console.log("imageFormData : ", imageFormData);

        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        });

    });

    const onRemoveImage = useCallback((index) => () => {
        dispatch({
            type: REMOVE_IMAGE,
            data: index,
        });
    });

    return (
        <>
            <TweetForm onSubmit={onSubmit}>
                <TweetTextArea
                    rows={4}
                    value={text}
                    onChange={onChangeText}
                    maxLength={140}
                    placeholder="어떤 신기한 일이 있었나요?"
                />
                <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="submit" style={{ float: 'right' }} htmlType="submit" loading={addPostLoading}>Tweet</Button>

            </TweetForm>
            {imagePaths.map((v, i) => (
                <div key={v} style={{ display: 'inline-block' }}>
                    <img src={`http://127.0.0.1:3065/${v}`} style={{ width: '200px' }} alt={v} />
                    <div>
                        <Button onClick={onRemoveImage(i)}>제거</Button>
                    </div>
                </div>
            ))}
        </>
    )
}


export default PostForm
