/**
 * Monaco editor scroll sync service.
 * Features:
 * - Scroll position tracking
 * - Follow mode support
 * - User-specific scroll syncing
 *
 * By Himanshu rana .
 */

import type { RefObject } from "react";

import type * as monaco from "monaco-editor";

import type { Scroll } from "@CodeX/types/scroll";

import { storage } from "@/lib/services/storage";

export const updateScroll = (
  editorInstanceRef: RefObject<monaco.editor.IStandaloneCodeEditor | null>,
  userID: string,
  scroll: Scroll
): void => {
  const editor = editorInstanceRef.current;
  if (!editor) return;

  if (storage.getFollowUserId() !== userID) return; // Prevent duplicate scroll events

  editor.setScrollPosition({ scrollLeft: scroll[0], scrollTop: scroll[1] });
};
