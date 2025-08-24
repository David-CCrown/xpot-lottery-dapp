const AppProvider = ({AppContext, children}:{AppContext: React.Context<null>, children: React.ReactNode})=> {
    return (
        <AppContext.Provider value={null}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;