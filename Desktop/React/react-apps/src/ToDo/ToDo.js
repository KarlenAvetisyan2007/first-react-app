import React, { Component } from 'react';
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

export class ToDo extends Component {
  state = {
    inputValue: '',
    selected: new Set(),
    tasks: []
  }

  click = (e) => {
    this.setState({
      text: this.state.inputValue,
      inputValue: ''
    })
  }

  addTask = () => {
    const inputValue = this.state.inputValue.trim();
    if (!inputValue) {
      return alert("please write the name of the task")
    } else {
      const newTask = {
        title: inputValue,
        _id: uuidv4()
      }
      const tasks = [...this.state.tasks, newTask]
      this.setState({
        tasks,
        inputValue: ''
      })
    }
  }

  change = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  delete = (taskId) => {
    const newTasks = this.state.tasks.filter((el) => el._id !== taskId)
    this.setState({
      tasks: newTasks
    })
  }

  toggleTask = (taskId) => {
    const selected = new Set(this.state.selected);
    const stringTaskId = taskId.toString();

    if (selected.has(stringTaskId)) {
      selected.delete(stringTaskId);
    } else {
      selected.add(stringTaskId);
    }

    this.setState({
      selected,
    });
  };

  removeSelected = () => {
    const { selected, tasks } = this.state;

    const newTasks = tasks.filter((task) => {
      if (selected.has(task._id)) {
        return false;
      }
      return true;
    });

    this.setState({
      tasks: newTasks,
      selected: new Set()
    });
  };

  selectAll = () => {
    const { tasks, selected } = this.state;
    const allTaskIds = tasks.map((task) => task._id.toString());

    if (selected.size === tasks.length) {
      this.setState({
        selected: new Set()
      });
    } else {
      this.setState({
        selected: new Set(allTaskIds)
      });
    }
  };

  openModal = () => {

    const confirmation = window.confirm(
      `Are you sure you want to delete the selected tasks?`
    );

    if (confirmation) {
      const { tasks, selected } = this.state;
      const newTasks = tasks.filter(
        (task) => !selected.has(task._id.toString())
      );

      this.setState({
        tasks: newTasks,
        selected: new Set(),

      });
      this.removeSelected();
    }
  };

  edit = (taskId) => {
    const question = window.prompt('Please write a new name for your task');

    if (question) {
      const newTasks = this.state.tasks.map((task) => {
        if (task._id === taskId) {
          return { ...task, title: question };
        }
        return task;
      });

      this.setState({
        tasks: newTasks,
      });
      console.log(newTasks)
    }
  };

  // --------------------------------------------------------------------------------------------------------------

  render() {
    const { tasks, inputValue, selected } = this.state;
    const taskComponent = tasks.map((task)=>{
      return <Col key={task._id} md={3} className="border p-3">
          <h3>{task.title}</h3>
          <p>This is your new task <input type="checkbox" onChange={()=>this.toggleTask(task._id)} checked={selected.has(task._id.toString())}></input></p>
          <Button variant='danger' onClick={()=>this.delete(task._id)}>Delete</Button>
          <Button variant='primary' onClick={()=>this.edit(task._id)} style={{ marginLeft: '1rem' }}>Edit</Button>
      </Col>
    })
    return (
      <Container>
        <h2 className='text-center mt-2 text-primary'>Task management system</h2>
        <Row className="justify-content-center">
          <Col xs={8} md={8} className='text-center'>
            <FormControl className="mt-2 input-animation" placeholder="" value={inputValue} onChange={this.change} />
            <Button className="m-3 " onClick={this.addTask}>Add task</Button>
            <Button size="medium" variant='danger' onClick={this.openModal} className="m-3" disabled={selected.size === 0 || tasks.length === 0}>Delete selected</Button>
            <Button className="m-3 " onClick={this.selectAll} disabled={tasks.length === 0}> {selected.size === 0 ? 'Select All Tasks' : 'Deselect Selected Tasks'} </Button>
          </Col>
        </Row>
        <Row>
          {taskComponent}
        </Row>
      </Container>
    );
  }
}
