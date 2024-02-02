// eslint-disable-next-line react/prop-types
const AppContainer = ({ children }) => {
    return (
        <section className="w-screen h-screen bg-gray-900 p-48 flex justify-center items-center flex-col">
            { children }
        </section>
    )
}

export default AppContainer;