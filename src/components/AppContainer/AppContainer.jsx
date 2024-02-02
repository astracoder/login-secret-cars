// eslint-disable-next-line react/prop-types
const AppContainer = ({ children }) => {
    return (
        <section className="w-screen h-screen bg-zinc-500">
            { children }
        </section>
    )
}

export default AppContainer;