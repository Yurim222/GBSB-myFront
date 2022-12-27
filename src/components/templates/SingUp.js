import { useState } from "react";
import axios from "axios";

function SignUp() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");
    const [userMail, setUserMail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: "api/book",
            data: {
                name: name,
                password: password,
                userID: userId,
                userMail: userMail,
            }
        }).then(() => {
            alert("회원가입이 정상적으로 완료되었습니다.");

            document.getElementById('name').value = null;
            document.getElementById('email').value = null;
            document.getElementById('userId').value = null;
            document.getElementById('password').value = null;

        }).catch(() => {
            alert("데이터 베이스 에러");
        });

        setName("");
        setPassword("");
        setUserId("");
        setUserMail("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>이메일</label>
                        <input id="email" type="email" name="introduce" onChange={(e) => setUserMail(e.target.value)}></input>
                        <button type="button">인증</button>
                    </div>
                    <div>
                        <label>이름</label>
                        <input id="name" type="text" name="name" onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label>아이디</label>
                        <input id="userId" type="text" name="userId" onChange={(e) => setUserId(e.target.value)}></input>
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input id="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <button type="submit">등록</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;