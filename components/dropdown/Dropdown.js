export default function Dropdown({ children }) {
    return (
        <div className="absolute w-auto -right-2 top-8 dropdown-child bg-white rounded-xl shadow-md border border-neutral-100">
            {children}
        </div>
    )
}