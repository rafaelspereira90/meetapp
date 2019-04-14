export const Types = {
  GET_REQUEST: "meetups/GET_REQUEST",
  GET_SUCCESS: "meetups/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function meetups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getMeetupsRequest: () => ({ type: Types.GET_REQUEST }),

  getMeetupsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
