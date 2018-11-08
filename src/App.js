import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
    const profiles = [
        { name: "Natsukiki", age: 25 },
        { name: "Toshiaki", age: 32 },
        { name: "NoName", age: 10 }
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

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default App;
