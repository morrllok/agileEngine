import { connect } from 'react-redux';
import { deleteItem } from '../actions/list_actions';
import ListView from '../components/list_products_view';

/*
 This is a redux specific function.
 What is does is: It gets the state specified in here from the global redux state.
 For example, here we are retrieving the list of items from the redux store.
 Whenever this list changes, any component that is using this list of item will re-render.
 */
const mapStateToProps = state => ({
  listItems: [].concat(state.list.items),
});

/*
 This is a redux specific function.
 http://redux.js.org/docs/api/bindActionCreators.html
 */
const mapDispatchToProps = dispatch => ({
  deleteItem: (name) => {
    dispatch(deleteItem(name));
  },
});


/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps, mapDispatchToProps)(ListView);
