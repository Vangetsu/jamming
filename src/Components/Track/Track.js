import React from 'react';


class Track extends React.Component {


    /*
    Create a method called renderAction that displays a <button> element with - as its content if the isRemoval property is true, and a + <button> element if the isRemoval property is false. Set the class name to Track-action.
    */


    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3><!-- track name will go here --></h3>
                    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
                </div>
                <button className="Track-action"><!-- + or - will go here --></button>
            </div>
        );
    }
}

export default Track;