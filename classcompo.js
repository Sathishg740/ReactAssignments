class Header extends React.Component{
    render(){
        return <h1>Header</h1>
    }
}
class Content extends React.Component{
    render(){
        return <h1>{this.props.Fname} {this.props.Lname}</h1>
    }
}
class Footer extends React.Component{
    render(){
        return <p>{this.props.c}</p>
    }
}

ReactDOM.render(<div>
    <Header />
    <Content Fname="Anil" Lname="Kumar"/>
    <Content Fname="Virat" Lname="Kohli"/>
    <Content Fname="Rohit" Lname="Sharma"/>
    <Footer c="Copyright@reactjs"/>
</div>,document.getElementById('container'))
