import './Register.css';
import { DragDropContext,Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import App from '../App';
import List from './List';

const Login = () => {
    return (


        <div className="wrapper fadeInDown">
            <div id="formContent">



                <div className="fadeIn first">
                    <h2>BeTogether</h2>
                </div>

                <DragDropContext>
                <Droppable droppableId="card">
                    {( provided) => (

                  
                    


                            <ol className="form-log" {...provided.draggableProps} ref={provided.innerRef}>
                                
                                 <Draggable key={List.id} draggableId={List.id}  >
                                     console.log(List);
                  {(provided)=>(
                                
                                    <li type="text" id="login" className="fadeIn second" name="name" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >  1</li>,
                                    <li type="text" id="text" className="fadeIn third" name="login" >2</li>,
                                    <li type="text" id="email" className="fadeIn third" name="login" >3</li>,
                                    <li type="text" id="password" className="fadeIn third" name="login" >4</li>
                                

                                    )}
                                    </Draggable> 

                            </ol>

                           
                     
                    
                      )}
                      </Droppable>
                   </DragDropContext>
           









               

                <div id="formFooter">
                    <a className="underlineHover" href="#">VOTE</a>
                </div>

            </div>
        </div>

    )
}

export default Login