// eslint-disable-next-line react/prop-types
const AppContainer = ({ children }) => {
    return (
        <main className="bg-login-screen bg-cover bg-center">
            <section className="backdrop-blur-sm bg-black/65 w-screen h-screen text-center p-48 flex justify-center items-center flex-col">
                { children }
            </section>
        </main>
    )
}

export default AppContainer;