import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/searchBox.component'
class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchText: ''
    }
    // this.search = this.search.bind(this)
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json()).then(response=>{
      console.log(response)
      this.setState({ monsters:response})
    })
  }

  search =(e) =>{
    this.setState({ searchText: e.target.value})
  }

  render(){
    const {monsters, searchText } = this.state
    const filterMonsters = monsters.filter(monster=>{
      if(monster.name.toLowerCase().includes(searchText.toLowerCase())){
        return monster
      }
    })

    return (
      <div className="App">
        <h1 class="title">Monsters</h1>
       <SearchBox
      placeholder = 'search monsters'
      handleChange = {this.search}
       ></SearchBox>
        <CardList monsters={filterMonsters}>

        </CardList>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         { this.state.string  }
        </p>
        <button onClick={()=> this.setState({string: "hello devanaboyina"})}> change text</button>
      </header> */}
    </div>
    )
  }
}

export default App;
