function Header(props){
    return <h1 className="head"> {props.name}</h1>
}

function Content({name,head,head1,name1}){
    return <div><h1>{head} {name}</h1> <h2>{head1} {name1}</h2></div>
}

function Footer({name}){
    return <h1> {name.n1}{name.n2}</h1>
}

ReactDOM.render(
    <div>
        <Header name="Home" />
        <Content head="Welcome to Mumbai" name="Thankyou"/>
        <Content head1="welcome to Dubai" name1="ThankYou"/>
        <Footer name={{n1:"copyright",n2:"@react.org"}}/>
    </div>,document.getElementById('container')
)
