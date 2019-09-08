import React from "react";

import { FloatingFace } from './FloatingFace';
import faceImg from "./FloatingFace/face.jpg";
import { withRouter } from "react-router-dom";
import { Api } from "../Api";

export class Face {
    constructor(public userName: string) { }
}

interface ContentState {
    faces: Face[];
}

export class Content extends React.Component<any, ContentState>  {
    state = {
        faces: [] as Face[]
    };
    eventSource = new EventSource(`${Api.baseUrl}faces`);

    componentDidMount() {
        this.eventSource.onmessage = (event: MessageEvent) => {
            const newFaces = JSON.parse(event.data) as Face[];
            console.log("New data: ", newFaces);

            this.setState((state) => ({
                faces: newFaces
            }));
        }
    }

    render() {
        const { faces } = this.state;

        const NavigateToLogin = withRouter(({ history }) => (
            <button onClick={() => history.push("/login")}>
                I want to be here!
            </button>
        ))

        return (
            <>
                <NavigateToLogin />
                <div>

                    {faces.map((f, index) => (<FloatingFace key={index} userName={f.userName} imgSrc={faceImg} />))}
                </div>
            </>
        )
    }
}