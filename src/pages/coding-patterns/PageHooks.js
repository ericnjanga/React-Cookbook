import React from "react";
import ExpenseTracker from "../../ExpenseTracker";
import CustomHookTest from "../../CustomHookTest";
import DaysOfTheWeek from "../../DaysOfTheWeek";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Card, CardBody } from "@chakra-ui/react";
import StatusBar from "../../components/StatusBar";
import SaveButton from "../../components/SaveButton";
import Form1 from "../../components/Form1";
import ChatroomApp from "../../components/TheChatroom/ChatroomApp";
import CounterApp from "../../components/CounterApp";

// const activateLink = ({ isActive }) => (isActive ? "active" : null);

const PageHooks = () => {
  const spacinfStyle = {
    // using string interpolation to set the margin
    marginBottom: `3.5rem`,
  };

  return (
    <>
      <Breadcrumbs />

      <div className="row">
        <h1>React Hooks</h1>
      </div>

      <div className="row">
        <div className="col">
          <h2>Custom Hooks</h2>
          <p>
            The two components below are using to same custom hook to render the
            UI based on the user's connectivity status (Turn your network off to
            see the bar showing a "Disconnected" message).
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-6">
          <h3>Status bar</h3>
          <p className="mb-3">
            This status bar indicates the network connection status by
            susbscribing to the window's online/offline event listeners.
          </p>
          <Card shadow="md" borderWidth="1px" borderColor="gray.300">
            <CardBody>
              <StatusBar />
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <h3>Save button</h3>
          <p className="mb-3">
            This Save button will become disabled and show “Reconnecting…”
            instead of “Save” while the network is off.
          </p>
          <Card shadow="md" borderWidth="1px" borderColor="gray.300">
            <CardBody>
              <SaveButton />
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-6">
          <h3>Form inputs</h3>
          <p className="mb-3">
            This form calls a hook eachtime there is a need to manage the state
            logic of an input (value, handle change).
          </p>
        </div>
        <div className="col-lg-6">
          <Card shadow="md" borderWidth="1px" borderColor="gray.300">
            <CardBody>
              <Form1 />
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-6">
          <Card shadow="md" borderWidth="1px" borderColor="gray.300">
            <CardBody>
              <ChatroomApp />
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <h3>Chat room</h3>
          <p className="mb-3">
            Custom Hooks re-render together with your component, that's why the
            chat room below is disconnected and reconnected each time the
            serverId or roomId is changed.
          </p>
          <h4>Note:</h4>
          <ul className="list-align-left">
            <li>
              See Chatroom component's useEffect function, and check console log
              messages
            </li>
            <li>
              See how the return of one hook can be passed down to another hook
              (Chatroom.js)
            </li>
          </ul>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-6">
          <h3>Counter</h3>
          <p className="mb-3">...</p>
        </div>
        <div className="col-lg-6">
          <Card shadow="md" borderWidth="1px" borderColor="gray.300">
            <CardBody>
              <CounterApp />
            </CardBody>
          </Card>
        </div>
      </div>

      <div style={spacinfStyle}></div>

      <div className="row mb-5">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <span className="badge badge-success">useReducer Hook</span>
              <ExpenseTracker />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <span className="badge badge-success">Custom Hook</span>
              <CustomHookTest />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <span className="badge badge-success">Custom Hook</span>
              <DaysOfTheWeek />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHooks;
