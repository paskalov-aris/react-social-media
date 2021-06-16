import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {checkIfAuthorizedThunk, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.checkIfAuthorized()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        login: state.auth.login,
    }
};

const mapDispatchToProps = {
    setAuthUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
