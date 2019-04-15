import React from 'react';
import firebase from '../config/firebase-config';

class TestReport1 extends React.Component {

    constructor() {
        super();
        this.state = {
            cafes: [],
        };
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('/cafes/').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let data = doc.data();
                data = JSON.stringify(data);
                this.setState({
                    cafes: data,
                });
            });
        });
    }


        render() {
            return (
                <div>
                    Test Report 1
                    <br/>
                    {this.state.cafes}

                    {/*<table>*/}
                        {/*<thead>*/}
                        {/*<tr>*/}
                            {/*<th>Name</th>*/}
                        {/*</tr>*/}
                        {/*</thead>*/}
                        {/*<tbody>*/}
                        {/*{this.state.cafes.map(cafe => (*/}
                            {/*<tr>*/}
                                {/*<td>{cafe.name}</td>*/}
                            {/*</tr>*/}
                        {/*))}*/}
                        {/*</tbody>*/}
                    {/*</table>*/}
                </div>
            )
        }

}

export default TestReport1;