import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoad: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoad: true,
                    items: result.drinks
                });
                
            },
            (error) => {
                this.setState({
                    isLoad: true,
                    error
                });
            }
        )
    }



    render() {
        const {error,isLoad,items} = this.state;
        if (error) {
            return <p>Error {error.masage} </p>
        }else if (!isLoad) {
            return <p>...Loading...</p>
        }else{
            console.log(items[0].name)
            return (
                <div className='app'>
                    <h1>HELLO REACT</h1>
                    <ul>
                        {items.map(items => 
                            (<li key={items.name}>{items.strDrink}
                            <img src={items.strDrinkThumb}
                             width='50px' height='50px' />
                             </li>) )}
                    </ul>
                </div>
            )
        }

    }
}

ReactDOM.render(<App/>,document.getElementById('root'));
