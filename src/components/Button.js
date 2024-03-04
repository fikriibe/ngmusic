
const Button = ({ children, className, onClick }) => {
    return (
        <button className={`rounded-3xl py-3 text-[12px] ${className}`} onClick={onClick}>{children}</button>
    )
}

export default Button