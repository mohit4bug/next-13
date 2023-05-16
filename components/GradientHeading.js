export default function GradientHeading({ children }) {
    return (
        <h1 className="capitalize font-extrabold text-[4rem]
            bg-gradient-to-r from-rose-500  to-white inline-block
             text-transparent bg-clip-text drop-shadow-[3px_4px_35px_rgba(244,63,94,0.51)]">
            {children}
        </h1>
    )
}