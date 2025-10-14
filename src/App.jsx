import Header from "./components/Header"
import data from "/src/data.js"
import Entry from "./components/Basic"
function App() {

  const entryelements = data.map(item => {
    return < Entry
        key={item.id}
        img={item.img}
        title={item.title}
        country={item.country}
        googleMapsLink={item.googleMapsLink}
        dates={item.dates}
        text={item.text}
    />
    
})
  return(
    <>
      < Header />
      {entryelements}
    </>
  ) 
}



export default App