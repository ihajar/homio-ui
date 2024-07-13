import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"

function HomePage() {
  return (
    <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Let's find your Dream Home!</h1>
            <p className="descp">
              We can help you rent, sell, or buy accomodations, <br />
              take a mortgage, invest in real estate, and a lot more
            </p>
            <SearchBar />
          </div>
        </div>

        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  ) 
}

export default HomePage