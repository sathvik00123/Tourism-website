


function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LoginPage/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/interests/:interest" element={<InterestsPage/>}/>
              <Route path="/destination/:state" element={<State/>}/>
              <Route path="/destination/:state/:statecity" element={<StateCities/>}/>
              <Route path="/home" element={<Home />}/> 
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/register" element={<Register />}/>
            </Route>
          </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
