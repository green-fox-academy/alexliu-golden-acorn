import { connect } from 'react-redux';
import { eatAcorn } from '../../actions/actions';
import Button from '../../../components/Button';

const mapStateToProps = () => {
  return {
    name: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(eatAcorn(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
