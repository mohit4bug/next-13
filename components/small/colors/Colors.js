export default function Colors({ colors }) {
    return (
        <div className="flex items-center gap-1 ">
            {
                colors.map(color => (
                    <div className={`md:px-8 px-6 py-4 rounded-sm cursor-pointer ${color}`}></div>
                ))
            }
        </div>
    )
}