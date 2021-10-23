export default function Page({ children }) {
    return (
        <div className="bg-login-background  bg-center w-screen  flex flex-col justify-between" style={{height: "150vh"}}>
            {children}
        </div>
    );
}
