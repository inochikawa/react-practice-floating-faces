import React from 'react';
import "./login.css";
import { withRouter } from 'react-router-dom';
import { Api } from '../../Api';
import { Face } from '../Content';

export const Login = () => {
    let userNameRef = React.createRef<HTMLInputElement>();

    const NavigateToHome = withRouter(({ history }) => (
        <button type="submit" onClick={() => {
            const userNameElement = userNameRef.current;

            if (userNameElement && userNameElement.value) {

                Api.facePost(new Face(userNameElement.value));
                history.push("/");
            }
        }}>
            GO!
        </button>
    ));

    return (
        <div className="login">
            <input ref={userNameRef} required={true} type="text" placeholder="username" />
            <NavigateToHome />
        </div>
    )
}