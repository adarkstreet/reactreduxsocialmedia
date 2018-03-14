import axios from 'axios';

export const BLOCKS ='BLOCKS';
export const ADD_BLOCK = 'ADD_BLOCK';
export const UPDATE_BLOCK = 'UPDATE_BLOCK';
export const DELETE_BLOCK = 'DELETE_BLOCK';

export const getBlocks = (cb) => {
  return (dispatch) => {
    axios.get(`/api/blocks`)
      .then( res => dispatch({ type: BLOCKS, blocks: res.data }) )
      .then( cb())
  }
}

export const addBlock = (block) => {
  return (dispatch) => {
    axios.post(`/api/blocks`, { block } )
      .then( res => dispatch({ type: ADD_BLOCK, block: res.data }) )
  }
}

export const updateBlock = (block) => {
  return (dispatch) => {
    axios.put(`/api/blocks/${block.id}`, { block })
      .then( res => dispatch({ type: UPDATE_BLOCK, block: res.data }) )
  }
}

export const deleteBlock = (id) => {
  return (dispatch) => {
    axios.delete(`/api/blocks/${id}`)
      .then( () => dispatch({ type: DELETE_BLOCK, id }) )
  }
}