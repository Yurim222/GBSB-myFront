function header() {
    return(
        <div className="w-full h-80 bg-blue-main px-default flex items-center justify-between">
            <div className="">
                <p>개발새발</p>
            </div>
            <div className="flex gap-x-5">
                <button>로그인</button>
                <button>회원가입</button>
            </div>
        </div>
    );
}

export default header;