import { connect } from 'react-redux';
import { buyAcorn, eatAcorn } from '../../actions/actions';
import ArrowHandler from '../../../components/ArrowHandler';

const mapDispatchToProps = dispatch => ({
  callback: function callback(e) {
    if (e.keyCode === 38) {
      dispatch(buyAcorn(1));
    } else if (e.keyCode === 40) {
      dispatch(eatAcorn(1));
    }
  },
});

const PressKey = connect(
  null,
  mapDispatchToProps,
)(ArrowHandler);

export default PressKey;
