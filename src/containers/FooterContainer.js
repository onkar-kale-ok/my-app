import Footer from '../components/Footer'

import {connect} from 'react-redux'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Footer)
// export default Home;