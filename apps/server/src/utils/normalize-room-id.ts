/**
 * Utility function for normalizing room IDs by removing hyphens.
 * Features:
 * - Hyphen removal
 * - Room ID formatting
 *
 * By Himanshu rana .
 */

export const normalizeRoomId = (roomId: string): string => {
  return roomId.replace(/-/g, "");
};
