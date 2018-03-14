import { BLOCKS, ADD_BLOCK, UPDATE_BLOCK, DELETE_BLOCK} from '../actions/blocks';


const blocks = (state = [], action ) => {
  switch (action.type) {
    case BLOCKS:
      return action.blocks
    case ADD_BLOCK:
      return [action.block, ...state]
    case UPDATE_BLOCK:
      return state.map( b => {
        if (b.id ===action.block)
          return action.block
        return b
      })
    case DELETE_BLOCK:
      return state.filter( b => b.id !== action.id )
    default:
      return state
  }
}

export default blocks;