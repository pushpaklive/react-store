import { renderTodos } from './utils';
import * as fromStore from './store'

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const reducers = {
  todos: fromStore.reducer
}

const state = {
  todos: {
    loaded: false,
    loading: false,
    data: []
  }
}

const store = new fromStore.Store(reducers, {});



button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    store.dispatch({
      type: 'ADD_TODO',
      payload
    })
    console.log(store.value)

    input.value = '';
  },
  false
);

todoList.addEventListener('click', function (event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
