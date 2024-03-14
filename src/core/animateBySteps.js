import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);

export const animateAndSetState = (setShowMeForGuid,compIndex,elmRef) => {
  console.log(" TESTING _SetState")
  console.log(store.getState())
  // const guid  = useSelector(({guidState}) => guidState.guidSteps)
  if (store.getState().guidState.guidSteps[0] && store.getState().guidState.guidSteps[0].currentIndex == compIndex ) {
      setShowMeForGuid('show__me__for__guid')
      // window.scrollTo(0, 0)
      elmRef.current.scrollIntoView()
  }else{
      setShowMeForGuid('')
  }
}