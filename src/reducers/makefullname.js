const makefullnamedefault = {
  text:'Linge4shwaran',
}

export default (state = makefullnamedefault,action) => {
  switch (action.type) {
    case 'TOUPPERCASE': return {...state,text:action.text};

    default: return state;

  }
}
