
// Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface DetectionClass {
  id: string;
  name: string;
  uzName: string;
  icon: React.ReactNode;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Partner {
  name: string;
  logo: string;
}