import openSocket from "socket.io-client";
import { useEffect } from "react";
const socket = openSocket(`http://${window.location.hostname}:8080`);

export interface IPart {
  name: string;
}

export function useSubcribeToNewPart(callback: (part: IPart) => void, ...args: any[]) {
    useEffect(() => {
        socket.on("newpart", callback);
        return () => {socket.off("newpart", callback)};
    }, [callback, ...args]);
}


export function createPart() {
  socket.emit("createpart");
}

