import React, {useState} from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

export default function ChatInput({handleSendMsg}) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmojiPickerShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick = ( emojiObject, event) => {
        console.log(emojiObject);
        let message = msg;
        message += emojiObject.emoji;
        setMsg(message);
    };

    const sendChat = (event) => {
        event.preventDefault();
        console.log(event);
        if(msg.length > 0){
            handleSendMsg(msg);
            setMsg("");
        }
    }
    return <Container>
        <div className="button-container">
            <div className="emoji">
                <BsEmojiSmileFill onClick = {handleEmojiPickerShow}/>
                {showEmojiPicker && (<EmojiPicker onEmojiClick={handleEmojiClick}/>)}
            </div>
        </div>
        <form className="input-container" onSubmit={(e) => {
            sendChat(e)
        }}>
            <input 
                type="text"
                placeholder="type your message here"
                value={msg}
                onChange={(e) => {setMsg(e.target.value)}}/>
            <button className="submit" >
                <IoMdSend />
            </button>
        </form>
    </Container>
}

const Container = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding: 0 2 rem;
    padding-button: 0.3rem;
    .button-container {
        display: flex;
        align-items: center;
        color: white;
        gap: 1rem;
        .emoji {
            left: 25%;
            position: relative;
            svg {
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer;  
            }
            .EmojiPickerReact {
                position: absolute;
                top: -465px;
                background-color: #080420;
                box-shadow: 0 5px 10px #9a8653;
                border-color: #9186f3;
                .epr-emoji-variation-picker {
                    button: contrast(0); 
                }
                .epr-search {
                    background-color: transparent;
                    border-color:#9186f3;
                }
                .epr-body {
                    background-color: #080420;
                }
                .epr-emoji-category-label {
                    background-color: #080420;
                }
                ::-webkit-scrollbar {
                    background-color: #080420;
                    width: 5px;
                }
                ::-webkit-scrollbar-thumb {
                    background: #9a8653;
                }
                epr-hover-bg-color: #0f4e8b;
            }
        }
    }
    .input-container {
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        background-color: #ffffff34;
        input {
            width: 90%;
            height: 60%;
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;
            &::selection {
                background-color: #9186f3;
            }
            &:focus {
                ouline: none;
            }
        }
        button {
            padding: 0.3rem 2rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9186f3;
            border: none;
            svg {
                font-size: 2rem;
                color: white;
            }

        }
    }

`;