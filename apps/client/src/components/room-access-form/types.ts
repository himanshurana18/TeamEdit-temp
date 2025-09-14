/**
 * Type definitions for room access form data.
 * Includes:
 * - Create room form types
 * - Join room form types
 *
 * By Himanshu rana .
 */

export interface CreateRoomForm {
  name: string;
}

export interface JoinRoomForm {
  name: string;
  roomId: string;
}
