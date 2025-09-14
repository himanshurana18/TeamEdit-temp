/**
 * Socket service for handling scroll position synchronization.
 * Features:
 * - Room-based scroll updates
 * - User identification
 * - Socket messaging
 *
 * By Himanshu rana .
 */

import type { Socket } from "socket.io";

import { ScrollServiceMsg } from "@CodeX/types/message";
import type { Scroll } from "@CodeX/types/scroll";

import { getUserRoom } from "./room-service";
import { getCustomId } from "./user-service";

export const updateScroll = (socket: Socket, scroll: Scroll) => {
  const roomID = getUserRoom(socket);
  if (!roomID) return;

  const customId = getCustomId(socket.id);
  if (customId) {
    socket.to(roomID).emit(ScrollServiceMsg.UPDATE_SCROLL, customId, scroll);
  }
};
