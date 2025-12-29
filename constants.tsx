
import React from 'react';
import { 
  ShieldCheck, 
  Video, 
  Activity, 
  Flame, 
  LayoutDashboard, 
  Bell, 
  Maximize, 
  Users, 
  HardHat, 
  Shirt, 
  Eye, 
  Zap,
  Globe,
  Settings,
  HelpCircle,
  Mail,
  Phone
} from 'lucide-react';
import { DetectionClass, Feature } from './types';

export const NAV_LINKS = [
  { name: 'HOME', href: '#home' },
  { name: 'PLATFORM', href: '#platform' },
  { name: 'HOW IT WORKS', href: '#how-it-works' },
  { name: 'FEATURES', href: '#features' },
  { name: 'DEMO', href: '#demo' },
  { name: 'PARTNERS', href: '#partners' },
  { name: 'SUPPORT', href: '#support' },
  { name: 'CONTACT', href: '#contact' },
];

export const DETECTION_CLASSES: DetectionClass[] = [
  { id: 'person', name: 'person', uzName: 'Xodim aniqlash', icon: <Users className="w-6 h-6" /> },
  { id: 'helmet', name: 'helmet', uzName: 'Kaska aniqlash', icon: <HardHat className="w-6 h-6" /> },
  { id: 'no-helmet', name: 'no-helmet', uzName: 'Kaskasiz xodim', icon: <Bell className="w-6 h-6 text-orange-500" /> },
  { id: 'vest', name: 'vest', uzName: 'Jilet aniqlash', icon: <Shirt className="w-6 h-6" /> },
  { id: 'no-vest', name: 'no-vest', uzName: 'Jiletsiz xodim', icon: <Bell className="w-6 h-6 text-orange-500" /> },
  { id: 'fire', name: 'fire', uzName: "Yong'inni aniqlash", icon: <Flame className="w-6 h-6 text-red-500" /> },
  { id: 'smoke', name: 'smoke', uzName: 'Tutunni aniqlash', icon: <Activity className="w-6 h-6 text-gray-400" /> },
];

export const FEATURES: Feature[] = [
  { 
    id: 'rt-detection', 
    title: 'Real-time Detection', 
    description: 'Barcha kameralarni 100ms dan kam vaqt ichida tahlil qilish.', 
    icon: <Zap className="w-8 h-8 text-amber-500" /> 
  },
  { 
    id: 'ppe-compliance', 
    title: 'PPE Compliance', 
    description: 'Kaska va jiletlardan foydalanishni 24/7 avtomatik nazorat qilish.', 
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" /> 
  },
  { 
    id: 'fire-smoke', 
    title: 'Fire & Smoke Detection', 
    description: 'Yong\'in va tutunni ilk bosqichlaridayoq aniqlash tizimi.', 
    icon: <Flame className="w-8 h-8 text-amber-500" /> 
  },
  { 
    id: 'multi-cam', 
    title: 'Multi-camera Support', 
    description: 'Cheksiz miqdordagi kameralarni bitta markazga ulash imkoniyati.', 
    icon: <Video className="w-8 h-8 text-amber-500" /> 
  },
  { 
    id: 'live-dash', 
    title: 'Live Dashboard', 
    description: 'Barcha hisobotlar va real vaqtda video-oqimlar bitta ekranda.', 
    icon: <LayoutDashboard className="w-8 h-8 text-amber-500" /> 
  },
  { 
    id: 'alerts', 
    title: 'Alerts & Notifications', 
    description: 'Telegram, SMS yoki mobil ilova orqali tezkor xabarnomalar.', 
    icon: <Bell className="w-8 h-8 text-amber-500" /> 
  },
];
