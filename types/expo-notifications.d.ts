/**
 * Custom type declarations for expo-notifications
 * This helps override any TypeScript errors from the package
 */

declare module 'expo-notifications' {
  import { EventSubscription } from 'expo-modules-core';
  
  // NotificationTriggerInput types
  export type TimeIntervalTriggerInput = {
    type?: 'timeInterval';
    repeats?: boolean;
    seconds: number;
  };

  export type DateTriggerInput = {
    type?: 'date';
    date: Date | number;
  };

  export type DailyTriggerInput = {
    type?: 'daily';
    hour: number;
    minute: number;
    repeats?: boolean;
  };

  export type CalendarTriggerInput = {
    type: 'calendar';
    repeats?: boolean;
    weekday?: number;
    hour?: number;
    minute?: number;
    second?: number;
  };

  export type NotificationTriggerInput = 
    | TimeIntervalTriggerInput 
    | DateTriggerInput 
    | DailyTriggerInput
    | CalendarTriggerInput
    | null;

  // NotificationBehavior types
  export type NotificationBehavior = {
    shouldShowAlert: boolean;
    shouldPlaySound: boolean;
    shouldSetBadge: boolean;
    shouldShowBanner?: boolean;
    shouldShowList?: boolean;
    priority?: AndroidNotificationPriority;
  };
  export const AndroidNotificationPriority: {
    MIN: 'min';
    LOW: 'low';
    DEFAULT: 'default';
    HIGH: 'high';
    MAX: 'max';
  };

  // Interface exports from the package
  export interface NotificationContent {
    title?: string;
    subtitle?: string;
    body?: string;
    data?: { [key: string]: any };
    sound?: boolean | string;
    badge?: number;
    color?: string;
    priority?: AndroidNotificationPriority;
    vibrationPattern?: number[];
    categoryId?: string;
  }

  export interface NotificationRequestInput {
    identifier?: string;
    content: NotificationContent;
    trigger: NotificationTriggerInput;
  }

  // Function exports
  export function getExpoPushTokenAsync(options?: { projectId?: string }): Promise<{ data: string }>;
  export function scheduleNotificationAsync(request: NotificationRequestInput): Promise<string>;
  export function cancelScheduledNotificationAsync(identifier: string): Promise<void>;
  export function getPermissionsAsync(): Promise<{ status: string }>;
  export function requestPermissionsAsync(): Promise<{ status: string }>;
  export function getAllScheduledNotificationsAsync(): Promise<any[]>;
  export function setNotificationHandler(handler: { handleNotification: () => Promise<NotificationBehavior> }): void;
  export function setNotificationChannelAsync(
    channelId: string, 
    channel: { 
      name: string;
      importance?: AndroidNotificationPriority;
      vibrationPattern?: number[];
      lightColor?: string;
    }
  ): Promise<null>;
}
