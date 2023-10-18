import React from "react";
import {
  LiveRole,
  ScenarioModel,
  ZegoUIKitPrebuilt,
} from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

interface ZegoCloudRoomConfig {
  container: any;
  scenario?: {
    mode?: ScenarioModel;
    config?: {
      role: LiveRole;
    };
  };
  showTurnOffRemoteCameraButton: boolean;
  showTurnOffRemoteMicrophoneButton: boolean;
  showRemoveUserButton: boolean;
  // Other properties if any
}

const Room: React.FC = () => {
  const { roomCode } = useParams<{ roomCode?: string }>();

  if (!roomCode) {
    return <div>Room Code Not Found</div>;
  }

  const myMeeting = async () => {
    const appID: any = process.env.REACT_APP_ZEGO_APP_ID;
    const serverSecret: any = process.env.REACT_APP_ZEGO_SERVER_SECRET;
    const kitToken: string = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomCode,
      Date.now().toString(),
      "ilyas"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: document.getElementById("my-element") as HTMLElement,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      showTurnOffRemoteCameraButton: true,
      showTurnOffRemoteMicrophoneButton: true,
      showRemoveUserButton: true,
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Room;
