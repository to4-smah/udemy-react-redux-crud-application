import React from 'react';

// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <label htmlFor="bar">
//                     bar
//                 </label>
//                 <input type="text" onChange={() => {console.log("I am Clicked.")}} />
//             </React.Fragment>
//         )
//
//     }
// }

const App = () => {
    const profiles = [
        { name: "Natsukiki", age: 25 },
        { name: "Toshiaki", age: 32 },
        { name: "haru" }
    ]

    return (
        <div>
            {
                profiles.map((profile, index) => {
                    return <User name={ profile.name } age={ profile.age } key={index} />
                })
            }
        </div>
    )
}

const User = (props) => {
    return <div>I am {props.name}, and {props.age} Years old.</div>
}

User.defaultProps = {
    age: 1
}

export default App;
