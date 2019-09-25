import React from 'react';


const InnerView = ({children}) => {
    return <div>{children}</div>
}

const View = (props) => {
    var inner = []
    for ( let i = 0; i < props.n; i++) {
        inner.push(props.children)
    }
    return <div>{inner}</div>
}


function App() {

const writing = 'airswap'
  return (
    <div className="App">
        <View n={6}>
            <InnerView>
                <p>{'writing'}</p>
            </InnerView>
        </View>
    </div>
  );
}

export default App;
