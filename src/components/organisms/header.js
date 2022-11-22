function Header() {
    return(
        <div className="w-full h-80 bg-blue-main px-default flex items-center justify-between">
             <img className= "w-full h-80 w-20 items-left" src="/gbsb.png" alt="logo" />
            <div className="text-slate-100 w-24">
                <p>여행 갈까?</p>
            </div>
            <div className="flex gap-x-5 text-slate-100	">
                <button>로그인</button>
                <button>회원가입</button>
            </div>
        </div>
    );
}

export default Header;