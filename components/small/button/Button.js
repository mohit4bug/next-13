export default function Button({ children }) {
    return (
        <button className="flex items-center gap-2 bg-slate-800 font-semibold text-white px-6 py-3 rounded-full shadow-sm">
            {children}
        </button>
    )
}