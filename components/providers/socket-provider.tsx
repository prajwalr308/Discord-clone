"use client";

import { createContext, useContext, useState } from "react";

type SocketContextType = {
  socket: any | null;
  isConnected: boolean;
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket] = useState(null);
  const [isConnected] = useState(false);

  // Socket.io is disabled - using TanStack Query polling instead
  // This provides real-time updates via 1-second polling without WebSocket complexity

  return <SocketContext.Provider value={{ socket, isConnected }}>{children}</SocketContext.Provider>;
};
