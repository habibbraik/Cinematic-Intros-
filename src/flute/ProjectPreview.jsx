"use client";
import React from "react";
import { ProjectPreview } from "@webprodigies/flute/preview";
import { sceneModules } from "./catalog";
// Host-owned development flag: no process, Vite or Electron globals in this adapter.
export function FluteProjectPreview({ children, enabled, active, ...props }) {
  if (!enabled) return children;
  return <ProjectPreview {...props} projectId="f0ad6135-ce11-424d-8c20-656c37f4dcf3" enabled={enabled} active={active} sceneModules={sceneModules}>{children}</ProjectPreview>;
}
