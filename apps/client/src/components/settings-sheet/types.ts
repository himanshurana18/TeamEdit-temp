/**
 * Type definitions for editor option configurations.
 * Features:
 * - Option metadata
 * - Type constraints
 * - Value definitions
 *
 * By Himanshu rana .
 */

export type EditorOption = {
  title: string;
  type: "boolean" | "string" | "number" | "select" | "text";
  options?: string[];
  currentValue: unknown;
};
