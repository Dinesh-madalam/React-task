import CustomList from "../customList/CustomList";
import Component from "react" 
class TodoComponent extends Component {
    state = {
        todos : ["watch kalki movie","Watch Indian -2 "]
    }
    addTodoHandler= () => {
        const newState =[...this.state.todos,"watch Kalki -2 in 2025"]
        this.setState ({
            todos : newState,
        });
    }
    render(){
        return (
            <>
            <h3> I am todo</h3>
            <CustomList list={this.state.todos}/>
            <button onClick={this.addTodoHandler}>Click to add todo</button>
            </>
        )
    }
}

export default TodoComponent;