import { connect } from 'react-redux';
import { buyAcorn } from '../../actions/actions';
import Button from '../../../components/Button';

const mapStateToProps = (state) => {
  return {
    name: 'Buy one',
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(buyAcorn(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
