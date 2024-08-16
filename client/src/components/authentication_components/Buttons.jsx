function Buttons() {
    const storedUser = localStorage.getItem("chat-user");

    if (!storedUser) {
        return (
            <div className="nav-buttons">
                <a href="/login">
                    <button className="login-butt">
                        Login
                    </button>
                </a>
                <a href="/signup">
                    <button className="register-butt">
                        Register
                    </button>
                </a>
            </div>
        );
    } else {
        const user = JSON.parse(storedUser);
        return (
            <a href="#">
                <div className="avatar bottom-4">
                    <img className="webpage-butt size-16 rounded-full" src={user.profilePic} alt="User Avatar" />
                </div>
            </a>
        );
    }
}

export default Buttons;
